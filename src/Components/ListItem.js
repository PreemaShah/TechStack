import React,{Component} from 'react';
import {CardItem} from './Common';
import {connect} from 'react-redux'
import {Text,View,TouchableWithoutFeedback,LayoutAnimation} from 'react-native';
import * as actions from '../Actions'
class ListItem extends Component
{
    componentWillUpdate()
    {
        LayoutAnimation.spring();

    }

    renderDescription(){

        const {library,expanded}=this.props;
        if(expanded)
        {
            return(
                <Text style={{flex:1}}>
                    {library.description}
                </Text>
            );
        }
    }
    render(){
        const {id,title}=this.props.library;
        return(
            <TouchableWithoutFeedback
                onPress={()=>this.props.SelectLibrary(id)}
            >
                <View>
                    <CardItem>
                        <Text style={styles.textStyle}>{title}</Text>
                    </CardItem>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );

    }

}
const styles = {

    textStyle:{
        fontSize:18,
        flex:1,
        paddingLeft:15
    }
};

const MapStateToProps = (state,ownProps) =>
{
    const expanded = state.selectedLibraryId===ownProps.library.id;
    return {expanded};
};

export default connect(MapStateToProps,actions)(ListItem);