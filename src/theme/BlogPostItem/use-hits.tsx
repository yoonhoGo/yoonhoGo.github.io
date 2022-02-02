import 'react';
import React from 'react';

const siteUrl = 'https://hits.seeyoufarm.com';

export default (pageUrl: string) => {
  return (
    <a href={siteUrl}>
      <img
        src={`https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${pageUrl}%2F&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false`}
      />
    </a>
  );
};
