import React from 'react';

const PodcastDetails = ({ params }: { params: { podcastId: string }}) => {
  return (
    <div>
      <p className='text-white-1'>PodcastDetails - {params.podcastId}</p>
    </div>
  );
};

export default PodcastDetails;
