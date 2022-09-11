import React from 'react';

import ContactList from '../components/ContactList';

export default {
    title: 'ContactList',
    component: ContactList,
  };

  const Template = (args) => <ContactList {...args} />;

  export const Primary = Template.bind({});
  Primary.args = {
    contacts : [
      {
        id: "1",
        name: "Dipu",
        email: "dipudan@gmail.com"
      },
      {
        id: "2",
        name: "Krishnan",
        email: "dipudan@yahoo.com"
      }
    ]
  }