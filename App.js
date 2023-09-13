import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


function Ask() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', width:'414px',}}>
      <View style={styles.headcont}>
        <View style={styles.topicon}>
          <MaterialCommunityIcons name='keyboard' color={'white'} size={33} style={styles.iconskeyboard} />
          <FontAwesome name='camera' color={'white'} size={30} style={styles.iconscamera} />
          <FontAwesome name='microphone' color={'white'} size={30} style={styles.iconsmicrophone} />
        </View>
        <View style={styles.circlecont}>
          <View style={styles.circle} />
        </View>
        <View style={styles.hellocont}>
          <Text style={styles.hello}>Hello! </Text>
          <Image source={{ uri: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f44b.png' }} style={styles.wave} />
        </View>
        <View style={styles.questcon}>
          <Text style={styles.question}>What do you</Text>
          <Text style={styles.question}>need to know?</Text>
        </View>
        <View style={styles.buttoncont}>
          <View style={styles.buttonbg}>
            <View style={styles.buttonoutline}>
              <View style={styles.buttonoutline2}>
              <Text style={styles.buttonname}>SCAN & SOLVE</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      
      <View style={styles.headcont2}>
        <View style={styles.headcont2inner}>
          <View style={styles.rectangle}></View>
          <View style={styles.joinuscont}>
            <View style={styles.profcontmain}>
              <FontAwesome name='user-circle' color={'#667b8c'} size={65} style={styles.joinusicon} />
              <View style={styles.profcont}>
                <Text style={styles.joiunus}>Join us</Text>
                <Text style={styles.reg}>Create an account or log in</Text>
              </View>
            </View>
            <View style={styles.progcont}>
              <Image source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/377222398_832904735285320_8692266726647665124_n.png?_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeFPp4B1W9Nk4b1LwbcsZXSHEOu3DJpqX2UQ67cMmmpfZb5BkDhz-Or2QxmhkhlBOeHSwuo6aqevkdc5NMDqB_xv&_nc_ohc=V3yY9L8KS20AX9b6mCC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTkZefbJyZR9f4FTKZ2bjTrk1HstMe5xVk-ZI9UAhJdFQ&oe=6529447C'}} style={styles.imgprog}/>
            </View>
            <View style={styles.btngo}>
              <Text style={styles.go}>GO</Text>
            </View>
          </View> 
        </View>
      </View>
      
    </View>
  );
}

function Answer() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    </View>
  );
}

function Me() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={({}) => ({
    headerShown: false,
    tabBarStyle: {
      backgroundColor: 'white',
      justifyContent:'center',
      paddingBottom: 30,
      paddingTop: 30,
      height:90,
      activeTintColor: '#000',
      inactiveTintColor: '#fff',
      borderTopWidth: 0,
    },
      })}
    >
      <Tab.Screen
        name="Ask"
        component={Ask}
        options={{ 
          tabBarLabel: ({focused, color, fontWeight }) => (
            <Text style={{color: focused ? 'black' : color, fontWeight:focused ? 'bold':fontWeight}}>Ask</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="comment-question" color={focused ? 'black' : 'gray'} size={29} style={{ marginBottom:'20px' }} />
          ),
        }}
      />
      <Tab.Screen
        name="Answer"
        component={Answer}
        options={{
          tabBarLabel: ({focused, color, fontWeight}) => (
            <Text style={{color: focused ? 'black' : color , fontWeight:focused ? 'bold':fontWeight }}>Answer</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="chat" color={focused ? 'black' : 'gray'} size={29} style={{ marginBottom:'20px' }} />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={Me}
        options={{
          tabBarLabel: ({focused, color, fontWeight}) => (
            <Text style={{color: focused ? 'black' : color , fontWeight:focused ? 'bold':fontWeight}}>Me</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="user" color={focused ? 'black' : 'gray'} size={29} style={{ marginBottom:'20px' }} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
     <MyTabs/>
   </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headcont:{
    alignItems:'center',
    justifyContent:'center',
    height:'500px'
  },
  topicon:{
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:10
  },
  iconskeyboard:{
    alignItems:'center',
    marginLeft:'30',
    marginRight:'20px',
  },
  iconscamera:{
    alignItems:'center',
    marginLeft:'34px',
    marginRight:'30px',
  },
  iconsmicrophone:{
    alignItems:'center',
    marginLeft:'20px',
    marginRight:'20px',
  },
  circlecont:{
    alignItems:'center',
    marginBottom:50
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 100 / 2,
    backgroundColor: '#00bbf0',
  },
  hellocont:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:15  
  },
  hello:{
    color:'white',
    fontSize:'20px',
    fontFamily:'sans-serif',
    fontWeight:'bold',
  },
  wave:{
    width:'30px',
    height:'30px',
  },
  questcon:{
    alignItems:'center',
    marginBottom:40

  },
  question:{
    color:'white',
    fontSize:'50px',
    fontWeight:'bold',
    fontFamily:'sans-serif'
  },
  buttonbg:{
    width: 240,
    height: 90,
    borderRadius: 100 / 2,
    backgroundColor: '#00bbf0',
    alignItems:'center',
    justifyContent:'center',
  },
  buttonoutline:{
    width: 210,
    height: 65,
    borderRadius: 100 / 2,
    backgroundColor: 'black',
    alignItems:'center',
    justifyContent:'center',
  },
  buttonoutline2:{
    width: 200,
    height: 55,
    borderRadius: 100 / 2,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center',
  },
  buttonname:{
    fontSize:'23px',
    fontWeight:'bold',
  },
  headcont2:{
    height:'350px ',
    alignItems:'center',
    justifyContent:'center',
  },
  headcont2inner:{
    width: 414,
    height: 350,
    borderTopLeftRadius:40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10,
  },
  rectangle:{
    width: 55,
    height: 5,
    borderRadius: 100 / 2,
    backgroundColor: 'lightgray',
    marginBottom:18,
  },
  joinuscont:{
    width: 380,
    height: 280,
    borderTopLeftRadius:10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius: 10,
    backgroundColor: '#ebf8fe',
    alignItems:'center',
    justifyContent:'center',
  },
  profcontmain:{
    flexDirection:'row',
    justifyContent:'center'
  },
  joinusicon:{
    marginTop:5,
    marginLeft:10,
    marginBottom:20,
  },
  joiunus:{
    fontSize:'22px',
    fontWeight:'bold',
    fontFamily:'sans-serif',
    marginTop:15,
    marginLeft:20,
  },
  reg:{
    fontSize:'18px',
    marginLeft:20,
  },
  imgprog:{
    width:380,
    height:'40px',
  },
  btngo:{
    width: 330,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: '#50b3f6',
    alignItems:'center',
    justifyContent:'center',
    marginTop:20
  },
  go:{
    color:'white',
    fontSize:'18px',
    fontWeight:'bold',
    fontFamily:'sans-serif',
  }
});
