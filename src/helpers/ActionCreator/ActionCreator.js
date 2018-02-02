
const SuccessCreate = (SuccessType) => (data) => ({
    type: SuccessType,
    data
});

const ErrorCreate = (ErrorType) => (error) => ({
    type: ErrorType,
    error
});

const StartCreate = (StartType) => () => ({
    type: StartType
});

const ActionCreate = (action, Start, Success, Error) => (dispatch) => (params) => {
    dispatch(Start());
    action(params).then(Success).catch(Error);
};

const ActionCreator = ({action, types: { Start, Success, Error}}) => {

    return {
        Start: StartCreate(Start),
        Success: SuccessCreate(Success),
        Error: ErrorCreate(Error),
        Action: ActionCreate(action, this.Start, this.Success, this.Error)
    }
};

export default ActionCreator;