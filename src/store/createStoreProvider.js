import React from 'react';

export default storeProviders => storeProviders.reduce((Provider, components) => <Provider>{components}</Provider>);
