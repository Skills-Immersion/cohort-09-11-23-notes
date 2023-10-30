import React, { useState } from 'react';

function CastMember({ castMember }) {
  const [shouldDisplayImages, setShouldDisplayImages] = useState(false);
  return <div>
    <div onClick={() => setShouldDisplayImages(!shouldDisplayImages)}>
      {castMember.person.name}: {castMember.character.name}
    </div>
    {shouldDisplayImages && <div>
      <img src={castMember.person.image.medium} />
      {castMember.character.image && <img src={castMember.character.image.medium}></img>}
    </div>}
  </div>
}

export default CastMember;
