import React from "react";
import { CreateRepeatDialogProps } from "../interfaces";

import { Button, Form, FormGroup, FormControl, ControlLabel, CheckboxGroup, Checkbox, SelectPicker, Modal } from "rsuite";
import { Calendar } from "../classes";

class CreateRepeatDialog extends React.Component<CreateRepeatDialogProps> {
    constructor(props: Readonly<CreateRepeatDialogProps>) {
        super(props);
    }
    render() {
        if (this.props.inputing == undefined || this.props.inputing.cycle == undefined) return null;

        var time = <p />;
        if (this.props.inputing.allday == undefined || !this.props.inputing.allday.includes("allday"))
            time = (
                <FormGroup>
                    <ControlLabel>時間</ControlLabel>
                    <FormControl name="time" />
                </FormGroup>
            );

        var calendarOptions: Array<{ label: string, value: Calendar }> = [];
        if (this.props.userdata.calendars != undefined) {
            calendarOptions = this.props.userdata.calendars.map(calendar => {
                return { label: calendar.title, value: calendar };
            });
        }

        var cycleOptions = [
            { label: "每周重複", value: "Week" },
            { label: "每月重複", value: "Month" }
        ];

        var repeatData = null;
        if (this.props.inputing.cycle == "Week") {
            repeatData = (
                <FormGroup>
                    <ControlLabel>星期幾</ControlLabel>
                    <FormControl name="repeatData" />
                </FormGroup>
            );
        } else if (this.props.inputing.cycle == "Month") {
            repeatData = (
                <FormGroup>
                    <ControlLabel>每月幾號</ControlLabel>
                    <FormControl name="repeatData" />
                </FormGroup>
            );
        }

        return (
            <Modal show={this.props.creatingRepeat} aria-labelledby="form-dialog-title" width="xs">
                <Modal.Header closeButton onClick={this.props.closeRepeatCreateDialog}>
                    <h5>創建新系列</h5>
                </Modal.Header>
                <Modal.Body>
                    <Form formValue={this.props.inputing} onChange={this.props.handleFormChange}>
                        <FormGroup>
                            <ControlLabel>行事曆</ControlLabel>
                            <FormControl name="calendar" data={calendarOptions} accepter={SelectPicker} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>系列名稱</ControlLabel>
                            <FormControl name="title" />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>起始日期</ControlLabel>
                            <FormControl name="startDate" />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>結束日期</ControlLabel>
                            <FormControl name="endDate" />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>循環週期</ControlLabel>
                            <FormControl name="cycle" data={cycleOptions} accepter={SelectPicker} />
                        </FormGroup>
                        {repeatData}
                        <FormGroup>
                            <FormControl accepter={CheckboxGroup} name="allday">
                                <Checkbox value="allday">全天事件</Checkbox>
                            </FormControl>
                        </FormGroup>
                        {time}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.closeRepeatCreateDialog}>取消</Button>
                    <Button appearance="primary" onClick={this.props.createRepeat} loading={this.props.waiting}>
                        創立
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default CreateRepeatDialog;
