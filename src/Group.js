import React from 'react';
import { compose, withHandlers } from 'recompose';
import ItemRenderer from './ItemRenderer';

const itemEnhancer = compose(withHandlers({
  onClick: ({ clickHandler, value }) => () => {
    clickHandler(`value is: ${value}`);
  },
}));

const EnhancedItemRendrer = itemEnhancer(ItemRenderer);

const Group = ({ time, items, log }) => (
  <div>
    <h1>{time}</h1>
    {items.map(({ id, value }) => (
      <EnhancedItemRendrer
        key={id}
        value={value}
        clickHandler={log}
      />
      ))}
  </div>
);

export default Group;
