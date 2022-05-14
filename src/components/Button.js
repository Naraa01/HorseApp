import {Button, ActivityIndicator, TouchableRipple, Image} from 'react-native'
const Button = (props) => {
  return (
      <View style={styles.btnContainer}>
          <TouchableRipple
              onPress={props.onPress}
              style={props.style}
              disabled={props.disabled}
              rippleColor="rgba(0, 0, 0, .2)">
              <View style={styles.column}>
                  {
                      props.loading && <ActivityIndicator animating={true} color={props.loaderColor  COLORS.PRIMARY} size={'small'} style={styles.mr20} />
                  }

                  <Text style={props.textStyle}>{props.text}</Text>
                  {
                      props.rightIcon && <Icon name={props.rightIcon} size={props.iconSize  25} color={props.iconColor  COLORS.PRIMARY} style={{
                          paddingLeft: 10,
                          paddingRight: 10
                      }} />
                  }
                  {
                      props.rIcon && <Image
                          style={{
                              marginLeft: props.iconMl  15,
                              marginRight: props.iconMr  0,
                              width: props.iconWidth  20,
                              height: props.iconHeight  20,
                              resizeMode: props.iconResizeMode  "contain"
                          }}
                          source={props.rIcon} />
                  }
                  {props.rSvg}
              </View>
          </TouchableRipple>
      </View>
  )
}
export default Button;