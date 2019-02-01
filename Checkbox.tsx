import * as React from 'react'
import { PropertyControls, ControlType } from 'framer'
import CheckboxItem from '@material-ui/core/Checkbox'
interface Props {
  text: string
}

export class Checkbox extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    text: 'Nicole is sexy'
  }

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: 'Text' }
  }

  render() {
    return (
      <div>
        <CheckboxItem />
        {this.props.text}
      </div>
    )
  }
}
