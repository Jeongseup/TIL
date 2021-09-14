class SendToken extends Component {
    handleSubmit = () => {
        const tokenId = this.props.tokenId;
        const buttonType = this.props.buttonType;
        const from = this.state.accounts[0];
        const to = this.toAddress.value;

        if (buttonType === "T") {
            //transferFrom
            this.deedToken.methods.transferFrom.cacheSend(from, to, tokenId);
        } else if (buttonType === "A") {
            //approve
            this.deedToken.methods.approve.cacheSend(to, tokenId);
        }
    };

    // 토큰 전송을 토글로 구현
    render() {
        if (this.props.flag) {
            return (
                <Form inline style={{ marginBottom: "5px" }}>
                    <FormGroup controlId="addr">
                        <InputGroup>
                            <InputGroup.Addon>@</InputGroup.Addon>
                            <FormControl
                                type="text"
                                label="Text"
                                placeholder="Enter Ethereum address"
                                style={{ width: "366px" }}
                                inputRef={(ref) => (this.toAddress = ref)}
                            />
                        </InputGroup>{" "}
                        <Button type="button" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </FormGroup>
                </Form>
            );
        }
        return <br />;
    }
}

class Tokens extends Component {
    state = {
        items: [],
        flag: false,
        tokenId: null,
        buttonType: null,
    };

    constructor(props, context) {
        super(props);
        this.contracts = context.drizzle.contracts;
        this.deedToken = this.contracts.DeedToken;
    }

    handleTransfer = (e) => {
        this.showInputAddress(e.target.id, "T");
    };

    handleApprove = (e) => {
        this.showInputAddress(e.target.id, "A");
    };

    showInputAddress = (tokenId, buttonType) => {
        if (!this.state.flag) {
            this.setState({ flag: true, tokenId, buttonType });
        } else {
            this.setState({ flag: false, tokenId, buttonType });
        }
    };

    handleRemove = (e) => {
        const tokenId = e.target.id;
        this.deedToken.methods.burn.cacheSend(tokenId);
    };

    getTokenList = async (event) => {
        let t = 0,
            apr = 0,
            asset = null;
        let items = [];
        const totalSupply = await this.deedToken.methods.totalSupply().call();

        for (let j = 0; j < totalSupply; j++) {
            // tempary token id
            t = await this.deedToken.methods.tokenByIndex(j).call();

            // apr = await this.deedToken.methods.getApproved(t).call();

            // 임시 저장된 token id의 오너와 현재 연결된 메타마스크 계정의 주소가 같으면
            if (
                (await this.deedToken.methods.ownerOf(t).call()) ===
                this.props.accounts[0]
            ) {
                asset = await this.deedToken.methods.allTokens(t).call();
                console.log(asset);
                // items.push({f: getImgSrc(asset.x, 'face'),
                //             e: getImgSrc(asset.y, 'eyes'),
                //             m: getImgSrc(asset.z, 'mouth'),
                //             tokenId: t,
                //             approved: apr});
            }
        }
        // 토큰 목록 데이터 생성
        this.setState({ items });

        if (event !== undefined) {
            console.log(event.returnValues);
        }
    };

    componentWillUnmount() {
        this.eventTransfer.unsubscribe();
    }

    // 이벤트 리슨
    async componentDidMount() {
        await this.getTokenList();
        //event listening
        this.eventTransfer = this.deedToken.events
            .Transfer()
            .on("data", (event) => this.getTokenList(event));
        //console.log(this.eventTransfer);
    }

    render() {
        return (
            <Grid fluid={true} className="container">
                <TokenList
                    items={this.state.items}
                    flag={this.state.flag}
                    tokenId={this.state.tokenId}
                    buttonType={this.state.buttonType}
                    handleTransfer={this.handleTransfer}
                    handleApprove={this.handleApprove}
                    handleRemove={this.handleRemove}
                />
            </Grid>
        );
    }
}
