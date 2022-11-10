import React, {useState} from 'react';
import { View, StyleSheet} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple,Switch} from 'react-native-paper';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

function DrawerContent({props}) {
   return (
     <View style={styles.container}>
       <DrawerContentScrollView {...props}>
         <View style={styles.drawerContent}>
           <View style={[{ flexDirection: "row" }, styles.userInfoSection]}>
             <View style={{ margin: 15 }}>
               <Avatar.Image source={require("../images/avatar.jpg")} />
             </View>
             <View style={{ marginLeft: 9, marginTop: 15 }}>
               <Title>Antony Munyao</Title>
               <Caption>an**************o@gmail.com</Caption>
             </View>
           </View>
           <View style={[styles.row, styles.userInfoSection]}>
             <View style={styles.section}>
               <Paragraph style={styles.paragraph}>50 </Paragraph>
               <Caption>Followers</Caption>
             </View>
             <View style={[styles.section, { marginLeft: 30 }]}>
               <Paragraph style={styles.paragraph}>43 </Paragraph>
               <Caption>Following</Caption>
             </View>
           </View>

           <Drawer.Section style={{ flex: 1 }}>
             <DrawerItem
               label="Home"
               onPress={() => props.navigation.navigate("Home")}
               style={{ marginTop: 10 }}
             />
             <Drawer.Item
               label="Services"
               onPress={() => props.navigation.navigate("Notifications")}
               style={{ marginTop: 10 }}
             />
             <DrawerItem
               label="Payments"
               onPress={() => props.navigation.navigate("Home")}
               style={{ marginTop: 10 }}
             />
             <DrawerItem
               label="My Account"
               onPress={() => props.navigation.navigate("Notifications")}
               style={{ marginTop: 10 }}
             />
             <DrawerItem
               label="About Us"
               onPress={() => props.navigation.navigate("Notifications")}
               style={{ marginTop: 10 }}
             />
           </Drawer.Section>

           <Drawer.Section title={"Preferences"}>
             <TouchableRipple>
               <View style={styles.preferences}>
                 {/* <MaterialCommunityIcons name={'weather-night'} size={25} color={Colors.dark} style={{marginRight: 20, marginLeft: 20}}/> */}
                 <Text>Dark Mode</Text>
                 <Switch />
               </View>
             </TouchableRipple>
           </Drawer.Section>
         </View>
       </DrawerContentScrollView>
       {/* LOGOUT */}
       <Drawer.Section>
         {/* <MaterialCommunityIcons name={'logout'} size={25} /> */}
         <DrawerItem
           label="Logout"
           onPress={() => console.log("Logout")}
           style={{ marginTop: 10 }}
         />
       </Drawer.Section>
     </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContent: {
    marginTop: 15
  },
  row: {
    flexDirection: "row",
    margin: 15,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5
  },
  paragraph: {},
  preferences: {
    flexDirection: "row",
    flex: 1,
    marginTop: 30,
    marginBottom: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default DrawerContent;