import React from "react";
import { Button, FlexboxGrid, Form, FormGroup, FormControl, ControlLabel, CheckboxGroup, Checkbox, Modal, Avatar } from "rsuite";
import { EditEventDialogProps } from "../interfaces";

class EditEventDialog extends React.Component<EditEventDialogProps> {
    constructor(props: Readonly<EditEventDialogProps>) {
        super(props);
    }

    render() {
        if (this.props.inputing == undefined) return null;

        var ignoreReason = <p />;
        if (this.props.inputing.ignore != undefined)
            ignoreReason = this.props.inputing.ignore.includes("ignore") ? (
                <FormGroup>
                    <ControlLabel>忽略原因</ControlLabel>
                    <FormControl name="ignoreReason" />
                </FormGroup>
            ) : <p />;
        var time = <p />;
        if (this.props.inputing.allday == undefined || !this.props.inputing.allday.includes("allday"))
            time = (
                <FormGroup>
                    <ControlLabel>時間</ControlLabel>
                    <FormControl name="time" />
                </FormGroup>
            );
        return (
            <Modal show={this.props.editingEvent} aria-labelledby="form-dialog-title" width="xs">
                <Modal.Header closeButton onClick={this.props.closeEventEditDialog}>
                    <Avatar
                        style={{
                            backgroundImage:
                                "linear-gradient(315deg, " + this.props.selectedEvent.color[0] + " 0%, " + this.props.selectedEvent.color[1] + " 100%)",
                            color: "#ffffff"
                        }}
                    >
                        {this.props.selectedEvent.calendarTitle.charAt(0)}
                    </Avatar>{" "}
                    <h5 style={{ marginLeft: 6, display: "inline-block" }}>{this.props.selectedEvent.calendarTitle}</h5>
                </Modal.Header>
                <Modal.Body>
                    <Form formValue={this.props.inputing} onChange={this.props.handleFormChange}>
                        <FormGroup>
                            <ControlLabel>事件標題</ControlLabel>
                            <FormControl name="title" />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>日期</ControlLabel>
                            <FormControl name="date" />
                        </FormGroup>
                        <FormGroup>
                            <FormControl accepter={CheckboxGroup} name="allday">
                                <Checkbox value="allday">全天事件</Checkbox>
                            </FormControl>
                        </FormGroup>
                        {time}
                        <FormGroup>
                            <FormControl accepter={CheckboxGroup} name="ignore">
                                <Checkbox value="ignore">忽略該事項</Checkbox>
                            </FormControl>
                        </FormGroup>
                        {ignoreReason}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <FlexboxGrid>
                        <FlexboxGrid.Item colspan={3} style={{ textAlign: "left" }}>
                            <Button color="red" onClick={this.props.removeEvent} loading={this.props.removing}>
                                刪除
                            </Button>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item colspan={15} />
                        <FlexboxGrid.Item colspan={6} style={{ textAlign: "right" }}>
                            <Button onClick={this.props.closeEventEditDialog}>取消</Button>
                            <Button appearance="primary" onClick={this.props.updateEvent} loading={this.props.waiting}>
                                更新
                            </Button>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default EditEventDialog;
