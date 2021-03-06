import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

let widthDevice = Dimensions.get('window').width;
let heightDevice = Dimensions.get('window').height;

export default class Bottom extends Component {
    render() {
        return (
            <View style={styles._Bottom}>
                
                
                <View style={styles.mainBottom}>
                    
                    <View style={styles._left}>
                        <View style={styles.bottomItems}>
                            <Text style={!this.props.theme ? [styles.mainColor, styles.boldFont, styles.fontSize20]:[styles.darkFont, styles.boldFont, styles.fontSize20]}>Check-in/My Booking</Text>
                        </View>
                        <View style={[styles.bottomItems,styles.flexRow]}>
                            <View style={styles.nameAndBook}>
                                <Text style={[styles.greyFont,styles.fontSize10,styles.boldFont]}>Last name</Text>
                            </View>
                            <View style={styles.nameAndBook}>
                                <Text style={[styles.greyFont,styles.fontSize10,styles.boldFont]}>Booking Code</Text>
                            </View>
                        </View>
                        <View style={[styles.bottomItems,styles.flexRow]}>
                            <Text style={!this.props.theme ? [styles._margin,styles.mainColor] : [styles.darkFont,styles._margin]}>Go</Text>
                            <Image
                                source={require('../Assets/image/right-arrow-blue.png')}
                            />
                        </View>
                    </View>
                    
                    <View style={styles._right}>
                        <View style={styles.recommend}>
                            <View>
                                <Image
                                    source={require('../Assets/image/travelUI.png')}
                                    style={{width:80,height:80}}
                                />
                            </View>
                            <View>
                                <Text style={!this.props.theme ? [{marginLeft: 10},styles.boldFont,styles.mainColor]:[{marginLeft: 10},styles.boldFont,styles.darkFont]}>Prague</Text>
                            </View>
                        </View>
                        <View style={styles.recommend}>
                            <View>
                                <Image
                                    source={require('../Assets/image/travelUI2.png')}
                                    style={{width:80,height:80}}
                                />
                            </View>
                            <View>
                                <Text style={!this.props.theme ? [{marginLeft: 10},styles.boldFont,styles.mainColor]:[{marginLeft: 10},styles.boldFont,styles.darkFont]}>Stockholm</Text>
                            </View>
                        </View>
                        <View style={styles.recommend}>
                            <View>
                                <Image
                                    source={require('../Assets/image/travelUI3.png')}
                                    style={{width:80,height:80}}
                                />
                            </View>
                            <View>
                                <Text style={!this.props.theme ? [{marginLeft: 10},styles.boldFont,styles.mainColor]:[{marginLeft: 10},styles.boldFont,styles.darkFont]}>Bali</Text>
                            </View>
                        </View>
                    </View>
                
                </View>
            
            
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _Bottom: {
        flex: 1,
        // backgroundColor: 'pink',
        alignItems: 'flex-end',
        justifyContent:'space-between',
        paddingLeft: 30
    },
    mainBottom: {
        width: widthDevice - 80,
        // flex:1,
        // backgroundColor: 'wheat',
        paddingTop: 10,
        flexDirection: 'row',
    },
    fontSize20: {
        fontSize: 20
    },
    mainColor: {
        color: '#454c75'
    },
    _right:{
        // width:widthDevice/2.5,
        flexDirection:'row',
        flex:1,
        justifyContent: 'space-evenly',
    },
    _left:{
        // width:widthDevice/4,
        justifyContent: 'space-evenly',
        flex:1
    },
    bottomItems:{
        paddingVertical: 12
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    boldFont: {
        fontWeight: 'bold'
    },
    fontSize12:{
        fontSize:12,
        color:'#9aa0ae'
    },
    fontSize10:{
        fontSize:10,
    },
    greyFont:{
        color:'#9aa0ae'
    },
    nameAndBook:{
        backgroundColor:'#eff0f3',
        marginRight: 10,
        borderRadius:30,
        paddingVertical:10,
        width:150,
        paddingLeft: 20,
    },
    _margin:{
        marginRight: 10
    },
    recommend:{
        flexDirection:'row',
        alignItems:'center'
    },
    darkFont:{
        color:'#fff'
    },
});