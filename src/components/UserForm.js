import React from "react";
import {Form} from "semantic-ui-react";
import {AccountConsumer} from "../providers/AccountProvider";


class UserForm extends React.Component {
  state ={
    firstName: this.props.firstName, 
    lastName: this.props.lastName, 
    email: this.props.email,
    avatar: this.props.avatar,
  };


  handleChange = (e, {name, value}) =>{
    this.setState({ [name]: value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateAccount(this.state);
  };


  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Select 
          label="Avatar"
          name="avatar"
          value={this.state.avatar}
          onChange={this.handleChange}
          options={avatarOptions}
        />
        <Form.Input
          label="New First Name"
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
    
        <Form.Input
          label="New Last Name"
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
        />

        <Form.Input
          label="New Email"
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
};

const ConnectedAccountForm = (props) => (
  <AccountConsumer>
    {value => (
      <UserForm
        {...props}
        avatar={value.avatar}
        firstName={value.firstName}
        lastName={value.lastName}
        email={value.email}
        updateAccount={value.updateAccount}
      />
    )}
  </AccountConsumer>
)


const avatarOptions =[
  {key: "f", text:"Flash", value:"../avatars/flash.png"},
  {key: "s", text:"Superman", value:"../avatars/Superman.png"},
  {key: "i", text:"Ironman", value:"../avatars/Ironman.png"},
  {key: "h", text:"Hulk", value:"../avatars/hulk2.png"},
  {key: "p", text:"Spiderman", value:"../avatars/Spiderman.png"}

]


export default ConnectedAccountForm;