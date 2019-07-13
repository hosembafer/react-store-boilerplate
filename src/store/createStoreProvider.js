import React from 'react';

export default providers => ({ children }) => providers.reduce((tree, Provider) => <Provider>{tree}</Provider>, children);
