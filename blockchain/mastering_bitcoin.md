### 비트코인, 공개 블록체인 프로그래밍(Mastering Bitcoin)

- 저자 : Andreas M.Antonopoulos

---

**mining에 대하여**

- 거래들이 새 블록에 추가될 때 거래 수수료가 가장 높은 거래부터 우선순위로 추가된다. (하지만, 몇몇의 거래는 다른 기준이 있기도 하다)
- 보상은 블록 생성 보상 + 모든 거래에 대한 수수료의 총합이다
- 새로운 트랜잭션은 'candidate block'이라는 이름의 새로운 블록에 게시된다.

**blockchain에 대하여**

- 블록은 사실 옆으로 chaining되는 개념이 아닌, 위로 쌓이는 stacking의 개념이다.
- 한 거래가 새로운 블록에 쌓인 후, 이후 채굴된 블록들(쌓이게 되는 블록들)에 의해 그 거래는 보증이 더욱 강화된다.(관례상 6회 이상의 승인이 이루어지면 취소가 불가능하다, 여섯 개의 블록을 무효화해서 다시 계산하기 위해서는 엄청난 양의 계산이 필요하기 때문)

**풀노드와 라이트웨이트노드에 대하여**

- 풀노드 클라이언트의 추적
  > 풀노드 클라이언트의 경우 비트코인이 블록 내에서 처음 발생하여 도달할 때까지 돈의 출처를 추적할 수 있다.
- 라이트웨이트노드 클라이언트의 추적
  > 해당 거래가 블록체인 내에 존재하고 그 후 채굴된 블록이 여러 개 있다는 점을 승인하는 SPV(단순지불검증)을 하여 추적할 수 있다.

**bitcoin core 실행**

- 해보려고 git cloning은 했지만, windows환경에서는 제대로 안 돌아가서 실행은 못해봄

**python pybitcointools test**

- vitalik이 만든 python library인데, 2021.07.10 현재는 지원하지 않아서 trial 불가
- 비탈릭이 남겨둔 Msg
  <blockquato>
  I really don't have time to maintain this library further. If you want to fork it or use it despite lack of maintenance, feel free to clone locally and revert one commit.

This externally-maintained fork looks good though I did not personally write it so can't vouch for security: https://github.com/primal100/pybitcointools
</blockquato>

- 그래서 따라 들어가서, 해당 프로젝트를 해보려고 했지만! 해당 repo도 Read-only로 바뀌어 있어서..불가 testnet이 아닌 mainnet에서 장난치다가 돈을 잃어버린 사람들이 많아서 개발자가 막아둔 듯 싶다.
