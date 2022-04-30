import React, { useState } from "react";
import { View, Switch, StyleSheet, ImageBackground, Text, SafeAreaView, SectionList, StatusBar } from "react-native";

function Componente(props) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const image = { uri: "https://reactjs.org/logo-og.png" };

      const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );

      const DATA = [
        {
          title: "Música",
          data: ["Corridos tumbados", "Música de banda", "Trap"]
        }
      ];

    return (

      <View style={styles.container}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />

        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Miguel Montes</Text>
        </ImageBackground>

        <SafeAreaView style={styles.container}>
        <Text>Este es otro componente de text para agregar alguna descripcion o algo por el estilo.</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
            )}
          />
        </SafeAreaView>

      </View>

    );
  }
  
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },

    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: "center"
      },
      text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
      },

      container: {
        flex: 1,
      },

      container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
      },
      item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
      },
      header: {
        fontSize: 32,
        backgroundColor: "#fff"
      },
      title: {
        fontSize: 24
      }

  });
  
  export default Componente;