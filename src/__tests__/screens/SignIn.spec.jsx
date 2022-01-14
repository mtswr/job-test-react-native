import React from 'react';
import { render } from '@testing-library/react';

import { SignIn } from '../../screens/SignIn';

test('check if show correctly email input', () => {
    const { debug } = render(<SignIn />);
    debug();
}); 