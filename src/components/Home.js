import React from 'react';
import VIP from './Feeds/VIP';
 
import { withAuthorization } from './Session';
 
const HomePage = () => (
  <div>
   <VIP />
  </div>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);