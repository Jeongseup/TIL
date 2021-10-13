export const address = '0x57631dB7dC7fAFB664eD4d43667E0c9e56ec850b'
export const ABI = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bool',
                name: '_result',
                type: 'bool'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256'
            }
        ],
        name: 'Won',
        type: 'event'
    },
    {
        stateMutability: 'nonpayable',
        type: 'fallback'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_minBet',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: '_winRate',
                type: 'uint256'
            }
        ],
        name: 'betting',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getBalance',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'kill',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'ownable',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    }
]
