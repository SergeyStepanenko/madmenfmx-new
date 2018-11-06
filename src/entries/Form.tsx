import * as React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

const styles = (theme: any) => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

@observer
class Form extends React.Component<any> {
  @observable
  name: string = ''

  @observable
  phone: string = ''

  render() {
    const { classes } = this.props

    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="Ваше имя"
            className={classes.textField}
            value={this.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Ваш номер телефона"
            className={classes.textField}
            value={this.phone}
            onChange={this.handleChange('phone')}
            margin="normal"
          />
        </form>
        <Button variant="contained" color="primary" className={classes.button}>
          Заказать
        </Button>
      </div>
    )
  }

  @action('change name')
  handleChange = (name: string) => (event: any) => {
    this[name] = event.target.value
  }
}

export default withStyles(styles)(Form)
