import React from 'react';
import { compose, pure } from 'recompose';
import { withLogger } from 'reprolog';

const enhancer = compose(
  pure,
  withLogger(),
);

const ItemRenderer = ({ onClick, value }) => (
  <div onClick={onClick}>
    {value}
  </div>
);

export default enhancer(ItemRenderer);
