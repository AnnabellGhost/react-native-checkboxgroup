/**
 * Created by syjmac on 2017/9/19.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import * as React from "react";
import {StyleSheet, Text, View, Button, Image} from "react-native";
import CheckBoxGroup,{SelectedStatus} from "../checkBoxGroup";

const uri='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='

export default class MyAwesomeProject extends React.Component<object, {a:number}> {

	refs:{
		[k:string]:any
	};


	renderCheckBox=(isSel:boolean)=>{
		return <View style={{flex:1,width:24,backgroundColor:isSel?"#4ce40d":"#e08c0d",justifyContent:"center"}}>
			<Text>{isSel?"On":"Off"}</Text>
		</View>
	}

	rowTemplate=(checkbox:React.ReactElement<any>,item:React.ReactElement<any>,key:string)=>{
			return <View style={{borderWidth:1,borderColor:"red",marginBottom:6}}>
					<View style={{flexDirection:"row"}}>
						{checkbox}
						{item}
					</View>
					<View style={{backgroundColor:"yellow"}}><Text>bottom bar {key}</Text></View>
				</View>

	}

	render() {


		return (
				<View style={styles.container}  >

					<Button title="toggle whole checkboxgroup2"
					        onPress={()=>{
										this.refs.checkgp.toggle()
				}}></Button>


					<CheckBoxGroup rowTemplate = {this.rowTemplate}
					               renderCheckBox={this.renderCheckBox}
					               renderTitle={()=>{
					               	return <View style={{backgroundColor:"#a0ff1b"}}><Text>Outter Group Title</Text></View>
					               }}
					               key="OuterGP"
					               style={{backgroundColor:"transparent",padding:5}}
					               ref="checkgp" identifier="OuterGroup"
					               onChange={(v:SelectedStatus)=>{
													console.log(v)
												}}
					>

						<CheckBoxGroup  style={{borderColor:"blue",borderWidth:1,marginBottom:20,padding:5}}
						                renderTitle={()=>{
					               	    return <View style={{backgroundColor:"#a0ff1b"}}><Text>Inner Group Title</Text></View>
						                }}
						                key="AGroup"
						>
							<View style={[styles.item]} key="A1">
								<Text>A1 balabala...</Text>
								<Image style={styles.img}
								       source={{uri:uri}}></Image>
							</View>

							<View style={[styles.item]} key="A2">
								<Text>A2 balabala. 111..</Text>
								<Image style={styles.img}
								       source={{uri:uri}}></Image>
							</View>

							<View style={[styles.item]} key="A3">
								<Text>A3 balabala..333.</Text>
								<Image style={styles.img}
								       source={{uri:uri}}></Image>
							</View>

							<Text key="A">Grouo Item A</Text>
							<Text key="AA">Grouo Item AA</Text>
							<Text key="AAA">Grouo Item AAA</Text>
						</CheckBoxGroup>

						<Text key="B">Item B</Text>
						<Text key="BB">Item BB</Text>
						<Text key="BBB">Item BBB</Text>


					</CheckBoxGroup>

				</View>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	item:{
		height:100,
		width:300,
		backgroundColor:"green"
	},
	img:{
		width:66,height:58
	}
});

