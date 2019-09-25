import _remove from "lodash/remove"
import qs from "query-string"
import { useState, useReducer } from "react"

function reducerQS(
  queries: any,
  action: { queryName: string; operation: "add" | "remove"; value?: string }
) {
  if (action.operation === "add") {
    switch (typeof queries[action.queryName]) {
      case "undefined": {
        queries[action.queryName] = action.value
        break
      }
      case "string": {
        queries[action.queryName] = [queries[action.queryName], action.value]
        break
      }
      default: {
        queries[action.queryName].push(action.value)
        break
      }
    }
  } else if (action.operation === "remove") {
    switch (typeof queries[action.queryName]) {
      case "string": {
        delete queries[action.queryName]
        break
      }
      default: {
        if (action.value) {
          _remove(queries[action.queryName], tag => tag === action.value)
        } else {
          delete queries[action.queryName]
        }
        break
      }
    }
  }
  return queries
}

export function useQueryString() {
  const [queries, dispatch] = useReducer(
    reducerQS,
    qs.parse(typeof window !== "undefined" ? window.location.search : "")
  )

  return {
    queries,
    dispatch,
    stringify: () => qs.stringify(queries),
  }
}

export default useQueryString
