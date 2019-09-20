import React from "react";

const AccountContext = React.createContext();

export const AccountConsumer = AccountContext.Consumer;

class AccountProvider extends React.Component {
  
  state={
    firstName: "Erik",
    lastName: "Wilson",
    email: "ewilson@email.com",
    avatar: 'flash',
    updateAccount: (value) => this.updateAccount(value),
  };

  updateAccount = (value) => {
    this.setState({...value,})
  }

  render() {
    return(
      <AccountContext.Provider value={this.state}>
        {this.props.children}
      </AccountContext.Provider>
    )
  }
}

export default AccountProvider;