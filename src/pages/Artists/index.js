import React, {Component} from 'react';
import {Image} from 'react-native';
import logo from '../../assets/lamar.png';
import logo2 from '../../assets/eminem.png';
import logo3 from '../../assets/tupac.png';
import logo4 from '../../assets/notorious.png';

import Icon from 'react-native-vector-icons/Ionicons';
import {Container, Header, Text, Title, Card, CardFooter, Annotation, CardHeader, Content, ContanerCard} from './styles';

export default class Artists extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Text>Artists</Text>
          <Icon
            name="md-search"
            size={30}
            color="#FFF"
            style={{
              position: 'absolute',
              right: 0,
              marginRight: 7,
            }}
          />
        </Header>
        <Title>Popular</Title>
        <ContanerCard>
          <Content>
            <Card>
              <Image
              source={logo2}
              style={{
                position: 'absolute',
                height: 240,
                width: 176,
                borderRadius: 15,
              }}
              />
              <CardHeader>
                <Icon
                 name="ios-heart-empty"
                 size={28}
                 color="#666"
                 style={{
                  position: 'absolute',
                  right: 0,
                  marginRight: 6,
                  top: 5,
                }}
                 />
              </CardHeader>
              <CardFooter>
                <Annotation>Eminem</Annotation>
              </CardFooter>
            </Card>
          </Content>
          <Content>
            <Card>
            <Image
              source={logo3}
              style={{
                position: 'absolute',
                height: 240,
                width: 176,
                borderRadius: 15,
              }}
              />
              <CardHeader>
                <Icon name="ios-heart"
                 size={28}
                 color="#666"
                 style={{
                  position: 'absolute',
                  right: 0,
                  marginRight: 6,
                  top: 5,
                 }}
                />
              </CardHeader>
              <CardFooter>
                <Annotation>Tupac</Annotation>
              </CardFooter>
            </Card>
          </Content>
        </ContanerCard>
        <ContanerCard>
          <Content>
            <Card>
            <Image
              source={logo}
              style={{
                position: 'absolute',
                height: 240,
                width: 176,
                borderRadius: 15,
              }}
              />
              <CardHeader>
                <Icon
                 name="ios-heart-empty"
                 size={28}
                 color="#666"
                 style={{
                  position: 'absolute',
                  right: 0,
                  marginRight: 6,
                  top: 5,
                }}
                 />
              </CardHeader>
              <CardFooter>
                <Annotation>Kendrick Lamar</Annotation>
              </CardFooter>
            </Card>
          </Content>
          <Content>
            <Card>
            <Image
              source={logo4}
              style={{
                position: 'absolute',
                height: 240,
                width: 176,
                borderRadius: 15,
              }}
              />
              <CardHeader>
                <Icon name="ios-heart"
                 size={28}
                 color="#666"
                 style={{
                  position: 'absolute',
                  right: 0,
                  marginRight: 6,
                  top: 5,
                 }}
                />
              </CardHeader>
              <CardFooter>
                <Annotation>Notorious B.I.G</Annotation>
              </CardFooter>
            </Card>
          </Content>
        </ContanerCard>
      </Container>
    );
  }
}
