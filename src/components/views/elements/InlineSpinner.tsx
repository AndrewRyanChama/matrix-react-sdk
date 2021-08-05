/*
Copyright 2017 New Vector Ltd.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from "react";
import { replaceableComponent } from "../../../utils/replaceableComponent";
import SvgSpinner from "./SvgSpinner";

interface IProps {
    w?: number;
    h?: number;
    children?: React.ReactNode;
}

@replaceableComponent("views.elements.InlineSpinner")
export default class InlineSpinner extends React.PureComponent<IProps> {
    static defaultProps = {
        w: 32,
        h: 32,
    };

    render() {
        return (
            <div className="mx_InlineSpinner">
                <SvgSpinner
                    w={this.props.w}
                    h={this.props.h}
                    className="mx_InlineSpinner_icon mx_Spinner_icon"
                />
            </div>
        );
    }
}
