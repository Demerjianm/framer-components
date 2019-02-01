import * as React from 'react'
import { PropertyControls, ControlType } from 'framer'
import Radio from '@material-ui/core/Radio'
interface Props {
  text: string
}

export class RadioButton extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    text: 'Nicole is cool'
  }

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: 'Text' }
  }

  render() {
    return (
      <div>
        <Radio />
        {this.props.text}
      </div>
    )
  }
}
