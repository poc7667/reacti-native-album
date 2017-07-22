/**
 * Created by poc on 7/16/17.
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Card from "./Card";
import CardSection from "./CardSection";
import {Input} from "./Input";
import {Button} from "./Button";
import {Spinner} from "./Spinner";
import axios from 'axios';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;
        // this.setState({ error: '', loading: true });
        console.log(email.toLocaleLowerCase())
        console.log(password)
        axios.post('https://birchwords.co/api/v1/login_by_password', {
            email: email.toLocaleLowerCase(),
            password: password
        }).then(resp => {
            console.log(JSON.stringify(resp))
        }).catch((e) => {
            console.log(e)
        })
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
