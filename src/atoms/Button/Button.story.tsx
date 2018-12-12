import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';

import { icons } from 'atoms/Icon';
import Button from './Button';

storiesOf('Atoms', module).add('Button', () =>
  [
    {},
    { large: true },
    { secondary: true },
    { basic: true },
    { icon: 'question-circle' as keyof typeof icons },
  ].map((props, index) => (
    <Fragment key={index}>
      <Button {...props}>Button</Button>{' '}
    </Fragment>
  )),
);
