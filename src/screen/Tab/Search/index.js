import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      query: null,
      dataSource: [],
      dataBackup: [],
    };
  }

  componentDidMount() {
    var data = [
      {
        name: 'Baby Care',
        author: 'cream',
        img: require('../../../assets/Images/Image37.png'),
        description: 'The Cream is use for baby under 5 years.',
      },
      {
        name: 'Heart Power',
        author: 'Capsule',
        img: require('../../../assets/Images/Image40.png'),
        description: 'Provide energy for the breathing.',
      },
      {
        name: 'Rakt Shodhak',
        author: 'Capsule',
        img: require('../../../assets/Images/Image44.png'),
        description: 'Filter uncleaned bloood in body.',
      },
      {
        name: 'Musalee Power',
        author: 'power',
        img: require('../../../assets/Images/Image56.png'),
        description: 'Essential for the Gym.  ',
      },
      {
        name: 'Shankh Pushpi',
        author: 'Syrup',
        img: require('../../../assets/Images/Image62.png'),
        description: 'The medicine will be taken after the dinner.',
      },
      {
        name: 'Hair King',
        author: 'oil',
        img: require('../../../assets/Images/hair.png'),
        description: 'Avoid from the Hair fall and Gives strength to hair.',
      },
    ];

    this.setState({
      dataBackup: data,
      dataSource: data,
    });
  }

  filterItem = (event) => {
    var query = event.nativeEvent.text;
    this.setState({
      query: query,
    });
    if (query == '') {
      this.setState({
        dataSource: this.state.dataBackup,
      });
    } else {
      var data = this.state.dataBackup;
      query = query.toLowerCase();
      data = data.filter((l) => l.name.toLowerCase().match(query));

      this.setState({
        dataSource: data,
      });
    }
  };

  separator = () => {
    return (
      <View style={{height: 10, width: '100%', backgroundColor: '#e5e5e5'}} />
    );
  };

  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="rgba(172,208,132,1)"
        />
        <View style={styles.header}>
         
          <TextInput
            placeholder="Enter Text..."
            placeholderTextColor="gray"
            value={this.state.query}
            onChange={this.filterItem.bind(this)}
            style={styles.input}
          />
        </View>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={() => this.separator()}
          renderItem={({item, index}) => {
            return (
              <View style={styles.bookContainer}>
                <Image style={styles.image} source={item.img} />
                <View style={styles.dataContainer}>
                  <Text numberOfLines={1} style={styles.title}>
                    {item.name}
                  </Text>
                  <Text numberOfLines={4} style={styles.description}>
                    {item.description}
                  </Text>
                  <Text style={styles.author}>{item.author}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    width: '100%',
    backgroundColor: '#E8FAE4',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  back: {
    width: 30,
    height: 30,
  },
  input: {
    height: 45,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
    
  },
  bookContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  image: {
    height: 150,
    width: 90,
    margin: '2%',
  },
  dataContainer: {
    padding: 10,
    paddingTop: 5,
    width: width - 100,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    marginTop: '12%',
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
  author: {
    fontSize: 16,
  },
});
