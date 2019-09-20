import React from "react";

import {Card, Image } from "semantic-ui-react";
import {AccountConsumer} from "../providers/AccountProvider";

import flash from '../avatars/flash'

whichAvatar = () => {
  if (value.avatar === 'flash') {
    return <Image src={flash} wrapped ui={false} />
  }
   (value.avatar === 'flash') {
    return <Image src={flash} wrapped ui={false} />
  }
   (value.avatar === 'flash') {
    return <Image src={flash} wrapped ui={false} />
  }
  else (value.avatar === 'flash') {
    return <Image src={flash} wrapped ui={false} />
  }
  else (value.avatar === 'flash') {
    return <Image src={flash} wrapped ui={false} />
  }

}


const User = () => (
  <AccountConsumer>
    {value => ( 
      <Card>
       { whichAvatar() } 
        <Card.Content>
          <Card.Header>{value.firstName} {value.lastName}</Card.Header>
          <Card.Meta>
            Email: {value.email}
          </Card.Meta>
        </Card.Content>
      </Card>
    )}
  </AccountConsumer>
)

export default User;