import { StyleSheet,View,Text,Pressable} from 'react-native';


function GoalItem(props){


    return(
      <View style={styles.goalItem}>
        <Pressable onPress={props.onDeleteItem.bind(this,props.id)}
        //for style in android we can use ripple to have direct effect on the elememnt but for ios we need to define it seperatly 
        android_ripple={{color:'#210644'}}
        //this is for ios style when we want elemente a item we see the effect after pressed 
        style={({pressed }) => pressed && styles.pressedItem}
          >
          <Text style={styles.textcolor}>{props.text}</Text>
        </Pressable>
      </View>
      
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem:{
        margin:8,
        boarderRadius:6,
        backgroundColor:'#5e0acc',
      },
      pressedItem:{
        opacity:0.5
      },
      textcolor:{
        color:'white',
        padding:8,
      },

});