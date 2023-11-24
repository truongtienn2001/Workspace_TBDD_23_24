import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'





export default function ({ navigation, route }) {
    const [name, setName] = useState('Dianne Crooks');
    const [dataApi, setDataApi] = useState([]);

    const api = 'http://localhost:8088/v1/todos';
    const handleSubmit = () => {
        navigation.navigate({
            name: "Nhập todo",
            params: {
                user: name,
                dataApi: dataApi
            }
        });
    };

    useEffect(() => {
        const getDataApi = () => {
            fetch(api, {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
            }).then(res => (res.ok ? res.json() : console.log("getApi fail!!")))
                .then(data => {
                    let dataApiFilter = data.filter((elem) => elem.name == name)
                    setDataApi(dataApiFilter)
                }).catch(error => {
                    console.log(error);
                })
        }
        getDataApi()
    }, [name]);

    console.log(dataApi);
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text>Nhập tên người dùng</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={(e) => setName(e)}
                ></TextInput>
                <Button title="submit" onPress={() => handleSubmit()}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    top: {
        flex: 0.2,
    },
    middle: {
        flex: 1
    },
    input: {
        border: "1px solid black",
        height: 40,
        fontSize: 22,
        padding: 5,
    },
});
