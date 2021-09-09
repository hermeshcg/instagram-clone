import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { fetchUser } from '../redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    const { currentUser } = this.props;
    if (currentUser === undefined || currentUser === null) return <View></View>;
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>{currentUser.name} is logged </Text>
      </View>
    );
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
