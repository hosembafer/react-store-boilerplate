import React from 'react';

export default providers => ({ children }) => providers.reverse().reduce((tree, Provider) => <Provider>{tree}</Provider>, children);
