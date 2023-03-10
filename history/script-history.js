testHistory={
  "20230313/183254": {
    "stackup-bundler-launcher": {
      "name": "Stackup Bundler",
      "errors": "0",
      "failures": "1",
      "skipped": "1",
      "tests": "107",
      "time": "30.967",
      "timestamp": "2023-03-13T18:32:21.317130",
      "hostname": "fv-az401-180",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_bundle_replace_by_fee[]",
          "time": "0.124",
          "failure": {
            "message": "AttributeError: 'Error' object has no attribute 'result'",
            "#text": "tests/bundle/test_bundle.py:42: in test_bundle_replace_by_fee\n    assert higher_fee_op.send().result\nE   AttributeError: 'Error' object has no attribute 'result'"
          }
        },
        "2": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender[]",
          "time": "0.355"
        },
        "3": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender[]",
          "time": "0.437"
        },
        "4": {
          "classname": "tests.bundle.test_codehash",
          "name": "test_codehash_changed[]",
          "time": "0.508"
        },
        "5": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][no_storage][ok]",
          "time": "0.341"
        },
        "6": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][storage][drop]",
          "time": "0.234"
        },
        "7": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage][drop]",
          "time": "0.240"
        },
        "8": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.242"
        },
        "9": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_storage][ok]",
          "time": "0.237"
        },
        "10": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.243"
        },
        "11": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.247"
        },
        "12": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_init_code][drop]",
          "time": "0.444"
        },
        "13": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][context][drop]",
          "time": "0.237"
        },
        "14": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][external_storage][drop]",
          "time": "0.242"
        },
        "15": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][no_storage][ok]",
          "time": "0.266"
        },
        "16": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][storage][ok]",
          "time": "0.264"
        },
        "17": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage][ok]",
          "time": "0.273"
        },
        "18": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage_struct][ok]",
          "time": "0.280"
        },
        "19": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_storage][ok]",
          "time": "0.277"
        },
        "20": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage][ok]",
          "time": "0.282"
        },
        "21": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.282"
        },
        "22": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.486"
        },
        "23": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][context][ok]",
          "time": "0.271"
        },
        "24": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][external_storage][drop]",
          "time": "0.274"
        },
        "25": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][no_storage][ok]",
          "time": "0.296"
        },
        "26": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][storage][drop]",
          "time": "0.294"
        },
        "27": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage][drop]",
          "time": "0.302"
        },
        "28": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage_struct][drop]",
          "time": "0.308"
        },
        "29": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_storage][ok]",
          "time": "0.303"
        },
        "30": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage][drop]",
          "time": "0.301"
        },
        "31": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.316"
        },
        "32": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][external_storage][drop]",
          "time": "0.307"
        },
        "33": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][no_storage][ok]",
          "time": "0.335"
        },
        "34": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][storage][ok]",
          "time": "0.342"
        },
        "35": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage][ok]",
          "time": "0.348"
        },
        "36": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage_struct][ok]",
          "time": "0.348"
        },
        "37": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_storage][ok]",
          "time": "0.331"
        },
        "38": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage][ok]",
          "time": "0.342"
        },
        "39": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage_struct][ok]",
          "time": "0.353"
        },
        "40": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][external_storage][drop]",
          "time": "0.335"
        },
        "41": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][no_storage][ok]",
          "time": "0.159"
        },
        "42": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_storage][ok]",
          "time": "0.156"
        },
        "43": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage][ok]",
          "time": "0.170"
        },
        "44": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.169"
        },
        "45": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][external_storage][drop]",
          "time": "0.200"
        },
        "46": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][no_storage][ok]",
          "time": "0.188"
        },
        "47": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_storage][ok]",
          "time": "0.192"
        },
        "48": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage][ok]",
          "time": "0.199"
        },
        "49": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage_struct][ok]",
          "time": "0.208"
        },
        "50": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][external_storage][drop]",
          "time": "0.194"
        },
        "51": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.129"
        },
        "52": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.128"
        },
        "53": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.129"
        },
        "54": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.133"
        },
        "55": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.130"
        },
        "56": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.132"
        },
        "57": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.133"
        },
        "58": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.131"
        },
        "59": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.135"
        },
        "60": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.133"
        },
        "61": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.134"
        },
        "62": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.143"
        },
        "63": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.137"
        },
        "64": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.141"
        },
        "65": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.137"
        },
        "66": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.224"
        },
        "67": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.220"
        },
        "68": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.225"
        },
        "69": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.218"
        },
        "70": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.222"
        },
        "71": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.214"
        },
        "72": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.220"
        },
        "73": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.216"
        },
        "74": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.222"
        },
        "75": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.216"
        },
        "76": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.220"
        },
        "77": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.222"
        },
        "78": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.219"
        },
        "79": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.224"
        },
        "80": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.218"
        },
        "81": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.283"
        },
        "82": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.284"
        },
        "83": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.281"
        },
        "84": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.289"
        },
        "85": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.285"
        },
        "86": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.284"
        },
        "87": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.284"
        },
        "88": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.284"
        },
        "89": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.282"
        },
        "90": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.286"
        },
        "91": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.283"
        },
        "92": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.285"
        },
        "93": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.289"
        },
        "94": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.285"
        },
        "95": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.279"
        },
        "96": {
          "classname": "tests.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.010"
        },
        "97": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.057"
        },
        "98": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.054"
        },
        "99": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.050"
        },
        "100": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "0.158"
        },
        "101": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.006"
        },
        "102": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.163"
        },
        "103": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.007"
        },
        "104": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.136"
        },
        "105": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.102"
        },
        "106": {
          "classname": "tests.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.011"
        }
      }
    },
    "skandha-launcher": {
      "name": "Skandha Bundler",
      "errors": "2",
      "failures": "103",
      "skipped": "1",
      "tests": "107",
      "time": "51.379",
      "timestamp": "2023-03-13T18:31:27.377717",
      "hostname": "fv-az401-180",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_bundle_replace_by_fee[]",
          "time": "0.083",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_bundle.py:40: in test_bundle_replace_by_fee\n    assert lower_fee_op.send().result\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "2": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender[]",
          "time": "0.108",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_bundle.py:58: in test_max_allowed_ops_unstaked_sender\n    userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "3": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender[]",
          "time": "0.132",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_bundle.py:85: in test_max_allowed_ops_staked_sender\n    userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "4": {
          "classname": "tests.bundle.test_codehash",
          "name": "test_codehash_changed[]",
          "time": "0.107",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_codehash.py:43: in test_codehash_changed\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "5": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][no_storage][ok]",
          "time": "0.171",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "6": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][storage][drop]",
          "time": "0.168",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "7": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage][drop]",
          "time": "0.167",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "8": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.166",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "9": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_storage][ok]",
          "time": "0.177",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "10": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.165",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "11": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.170",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "12": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_init_code][drop]",
          "time": "0.355",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "13": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][context][drop]",
          "time": "0.163",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "14": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][external_storage][drop]",
          "time": "0.163",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "15": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][no_storage][ok]",
          "time": "0.199",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "16": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][storage][ok]",
          "time": "0.201",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "17": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage][ok]",
          "time": "0.197",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "18": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage_struct][ok]",
          "time": "0.198",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "19": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_storage][ok]",
          "time": "0.206",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "20": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage][ok]",
          "time": "0.197",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "21": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.198",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "22": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.382",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "23": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][context][ok]",
          "time": "0.201",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "24": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][external_storage][drop]",
          "time": "0.196",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "25": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][no_storage][ok]",
          "time": "0.254",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "26": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][storage][drop]",
          "time": "0.217",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "27": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage][drop]",
          "time": "0.221",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "28": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage_struct][drop]",
          "time": "0.224",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "29": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_storage][ok]",
          "time": "0.218",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "30": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage][drop]",
          "time": "0.249",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "31": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.220",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "32": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][external_storage][drop]",
          "time": "0.225",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "33": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][no_storage][ok]",
          "time": "0.252",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "34": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][storage][ok]",
          "time": "0.363",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "35": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage][ok]",
          "time": "0.251",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "36": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage_struct][ok]",
          "time": "0.252",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "37": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_storage][ok]",
          "time": "0.245",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "38": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage][ok]",
          "time": "0.255",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "39": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage_struct][ok]",
          "time": "0.258",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "40": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][external_storage][drop]",
          "time": "0.256",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "41": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][no_storage][ok]",
          "time": "0.095",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "42": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_storage][ok]",
          "time": "0.097",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "43": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage][ok]",
          "time": "0.096",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "44": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.096",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "45": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][external_storage][drop]",
          "time": "0.095",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "46": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][no_storage][ok]",
          "time": "0.130",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "47": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_storage][ok]",
          "time": "0.241",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "48": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage][ok]",
          "time": "0.131",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "49": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage_struct][ok]",
          "time": "0.131",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "50": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][external_storage][drop]",
          "time": "0.130",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "51": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.092",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "52": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.093",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "53": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.095",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "54": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.091",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "55": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.098",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "56": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.092",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "57": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.093",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "58": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.093",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "59": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.093",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "60": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.095",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "61": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.095",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "62": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.094",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "63": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.094",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "64": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.092",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "65": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.096",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "66": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.171",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "67": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.160",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "68": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.162",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "69": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.162",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "70": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.164",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "71": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.162",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "72": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.159",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "73": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.161",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "74": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.159",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "75": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.214",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "76": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.160",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "77": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.161",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "78": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.169",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "79": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.165",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "80": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.162",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "81": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.215",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:68: in test_factory_banned_opcode\n    response = UserOperation(sender=sender, initCode=initcode).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "82": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.241",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:68: in test_factory_banned_opcode\n    response = UserOperation(sender=sender, initCode=initcode).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "83": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.214",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:68: in test_factory_banned_opcode\n    response = UserOperation(sender=sender, initCode=initcode).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "84": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.212",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:68: in test_factory_banned_opcode\n    response = UserOperation(sender=sender, initCode=initcode).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "85": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.210",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:68: in test_factory_banned_opcode\n    response = UserOperation(sender=sender, initCode=initcode).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "86": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.218",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:68: in test_factory_banned_opcode\n    response = UserOperation(sender=sender, initCode=initcode).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "87": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.211",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:68: in test_factory_banned_opcode\n    response = UserOperation(sender=sender, initCode=initcode).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "88": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.235",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:68: in test_factory_banned_opcode\n    response = UserOperation(sender=sender, initCode=initcode).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "89": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.211",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:68: in test_factory_banned_opcode\n    response = UserOperation(sender=sender, initCode=initcode).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "90": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.220",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:68: in test_factory_banned_opcode\n    response = UserOperation(sender=sender, initCode=initcode).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "91": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.212",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:68: in test_factory_banned_opcode\n    response = UserOperation(sender=sender, initCode=initcode).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "92": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.218",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:68: in test_factory_banned_opcode\n    response = UserOperation(sender=sender, initCode=initcode).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "93": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.214",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:68: in test_factory_banned_opcode\n    response = UserOperation(sender=sender, initCode=initcode).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "94": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.216",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:68: in test_factory_banned_opcode\n    response = UserOperation(sender=sender, initCode=initcode).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "95": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.221",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/opbanning/test_op_banning.py:68: in test_factory_banned_opcode\n    response = UserOperation(sender=sender, initCode=initcode).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "96": {
          "classname": "tests.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.017"
        },
        "97": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.051",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/rpc/test_eth_estimateUserOperationGas.py:18: in test_eth_estimateUserOperationGas\n    ).send()\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "98": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.050",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/rpc/test_eth_estimateUserOperationGas.py:28: in test_eth_estimateUserOperationGas_execution_revert\n    ).send()\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "99": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.049",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/rpc/test_eth_estimateUserOperationGas.py:36: in test_eth_estimateUserOperationGas_simulation_revert\n    ).send()\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "100": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "0.051",
          "error": {
            "message": "failed on setup with \"TypeError: string indices must be integers\"",
            "#text": "tests/conftest.py:104: in execute_user_operation\n    userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "101": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.005",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/rpc/test_eth_getUserOperationByHash.py:27: in test_eth_getUserOperationByHash_error\n    response = RPCRequest(method=\"eth_getUserOperationByHash\", params=[\"\"]).send()\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "102": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.050",
          "error": {
            "message": "failed on setup with \"TypeError: string indices must be integers\"",
            "#text": "tests/conftest.py:104: in execute_user_operation\n    userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "103": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.004",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/rpc/test_eth_getUserOperationReceipt.py:25: in test_eth_getUserOperationReceipt_error\n    response = RPCRequest(method=\"eth_getUserOperationReceipt\", params=[\"\"]).send()\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "104": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.055",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/rpc/test_eth_sendUserOperation.py:16: in test_eth_sendUserOperation\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "105": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.056",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/rpc/test_eth_sendUserOperation.py:28: in test_eth_sendUserOperation_revert\n    response = bad_sig_userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "106": {
          "classname": "tests.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.010",
          "failure": {
            "message": "KeyError: 0",
            "#text": "tests/rpc/test_eth_supportedEntryPoints.py:11: in test_eth_supportedEntryPoints\n    assert supported_entrypoints[0] == CommandLineArgs.entrypoint\nE   KeyError: 0"
          }
        }
      }
    },
    "aabundler-launcher": {
      "name": "AA-Reference-Bundler/0.5.0",
      "errors": "0",
      "failures": "0",
      "skipped": "1",
      "tests": "107",
      "time": "34.316",
      "timestamp": "2023-03-13T18:30:50.582323",
      "hostname": "fv-az401-180",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_bundle_replace_by_fee[]",
          "time": "0.292"
        },
        "2": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender[]",
          "time": "0.574"
        },
        "3": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender[]",
          "time": "0.561"
        },
        "4": {
          "classname": "tests.bundle.test_codehash",
          "name": "test_codehash_changed[]",
          "time": "0.664"
        },
        "5": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][no_storage][ok]",
          "time": "0.232"
        },
        "6": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][storage][drop]",
          "time": "0.216"
        },
        "7": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage][drop]",
          "time": "0.221"
        },
        "8": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.235"
        },
        "9": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_storage][ok]",
          "time": "0.236"
        },
        "10": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.241"
        },
        "11": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.247"
        },
        "12": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_init_code][drop]",
          "time": "0.435"
        },
        "13": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][context][drop]",
          "time": "0.221"
        },
        "14": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][external_storage][drop]",
          "time": "0.227"
        },
        "15": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][no_storage][ok]",
          "time": "0.266"
        },
        "16": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][storage][ok]",
          "time": "0.265"
        },
        "17": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage][ok]",
          "time": "0.274"
        },
        "18": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage_struct][ok]",
          "time": "0.289"
        },
        "19": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_storage][ok]",
          "time": "0.270"
        },
        "20": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage][ok]",
          "time": "0.278"
        },
        "21": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.292"
        },
        "22": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.491"
        },
        "23": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][context][ok]",
          "time": "0.274"
        },
        "24": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][external_storage][drop]",
          "time": "0.260"
        },
        "25": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][no_storage][ok]",
          "time": "0.299"
        },
        "26": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][storage][drop]",
          "time": "0.284"
        },
        "27": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage][drop]",
          "time": "0.297"
        },
        "28": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage_struct][drop]",
          "time": "0.308"
        },
        "29": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_storage][ok]",
          "time": "0.308"
        },
        "30": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage][drop]",
          "time": "0.295"
        },
        "31": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.307"
        },
        "32": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][external_storage][drop]",
          "time": "0.298"
        },
        "33": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][no_storage][ok]",
          "time": "0.336"
        },
        "34": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][storage][ok]",
          "time": "0.340"
        },
        "35": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage][ok]",
          "time": "0.341"
        },
        "36": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage_struct][ok]",
          "time": "0.355"
        },
        "37": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_storage][ok]",
          "time": "0.348"
        },
        "38": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage][ok]",
          "time": "0.365"
        },
        "39": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage_struct][ok]",
          "time": "0.364"
        },
        "40": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][external_storage][drop]",
          "time": "0.345"
        },
        "41": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][no_storage][ok]",
          "time": "0.172"
        },
        "42": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_storage][ok]",
          "time": "0.154"
        },
        "43": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage][ok]",
          "time": "0.167"
        },
        "44": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.171"
        },
        "45": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][external_storage][drop]",
          "time": "0.195"
        },
        "46": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][no_storage][ok]",
          "time": "0.188"
        },
        "47": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_storage][ok]",
          "time": "0.194"
        },
        "48": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage][ok]",
          "time": "0.199"
        },
        "49": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage_struct][ok]",
          "time": "0.319"
        },
        "50": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][external_storage][drop]",
          "time": "0.183"
        },
        "51": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.131"
        },
        "52": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.133"
        },
        "53": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.136"
        },
        "54": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.131"
        },
        "55": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.134"
        },
        "56": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.135"
        },
        "57": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.135"
        },
        "58": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.132"
        },
        "59": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.133"
        },
        "60": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.140"
        },
        "61": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.135"
        },
        "62": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.144"
        },
        "63": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.141"
        },
        "64": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.148"
        },
        "65": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.146"
        },
        "66": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.214"
        },
        "67": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.219"
        },
        "68": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.217"
        },
        "69": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.217"
        },
        "70": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.223"
        },
        "71": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.217"
        },
        "72": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.227"
        },
        "73": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.219"
        },
        "74": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.223"
        },
        "75": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.218"
        },
        "76": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.223"
        },
        "77": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.222"
        },
        "78": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.228"
        },
        "79": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.229"
        },
        "80": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.216"
        },
        "81": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.292"
        },
        "82": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.283"
        },
        "83": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.296"
        },
        "84": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.289"
        },
        "85": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.287"
        },
        "86": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.294"
        },
        "87": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.290"
        },
        "88": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.291"
        },
        "89": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.295"
        },
        "90": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.295"
        },
        "91": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.294"
        },
        "92": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.291"
        },
        "93": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.293"
        },
        "94": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.296"
        },
        "95": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.292"
        },
        "96": {
          "classname": "tests.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.014"
        },
        "97": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.068"
        },
        "98": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.070"
        },
        "99": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.057"
        },
        "100": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "0.306"
        },
        "101": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.006"
        },
        "102": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.261"
        },
        "103": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.004"
        },
        "104": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.207"
        },
        "105": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.109"
        },
        "106": {
          "classname": "tests.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.012"
        }
      }
    },
    "aa-bundler-rust-launcher": {
      "name": "aa-bundler in Rust",
      "errors": "0",
      "failures": "14",
      "skipped": "1",
      "tests": "107",
      "time": "30.920",
      "timestamp": "2023-03-13T18:30:17.037824",
      "hostname": "fv-az401-180",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_bundle_replace_by_fee[]",
          "time": "0.094",
          "failure": {
            "message": "AssertionError: assert [] == [UserOperatio...gnature='0x')]\n  Right contains one more item: UserOperation(sender='0xE03B0619d3bC7A2741408933F2EB1b3Bddf5A089', nonce='0x1', initCode='0x', callData='0xa9e966b7000...tionGas='0x493e0', maxFeePerGas='0x77359400', maxPriorityFeePerGas='0x3b9aca00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  +  ,\n  -  UserOperation(sender='0xE03B0619d3bC7A2741408933F2EB1b3Bddf5A089',\n  -                nonce='0x1',\n  -                initCode='0x',\n  -                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n  -                callGasLimit='0x493e0',\n  -                verificationGasLimit='0xf4240',\n  -                preVerificationGas='0x493e0',\n  -                maxFeePerGas='0x77359400',\n  -                maxPriorityFeePerGas='0x3b9aca00',\n  -                paymasterAndData='0x',\n  -                signature='0x'),\n    ]",
            "#text": "tests/bundle/test_bundle.py:41: in test_bundle_replace_by_fee\n    assert dump_mempool() == [lower_fee_op]\nE   AssertionError: assert [] == [UserOperatio...gnature='0x')]\nE     Right contains one more item: UserOperation(sender='0xE03B0619d3bC7A2741408933F2EB1b3Bddf5A089', nonce='0x1', initCode='0x', callData='0xa9e966b7000...tionGas='0x493e0', maxFeePerGas='0x77359400', maxPriorityFeePerGas='0x3b9aca00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     +  ,\nE     -  UserOperation(sender='0xE03B0619d3bC7A2741408933F2EB1b3Bddf5A089',\nE     -                nonce='0x1',\nE     -                initCode='0x',\nE     -                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE     -                callGasLimit='0x493e0',\nE     -                verificationGasLimit='0xf4240',\nE     -                preVerificationGas='0x493e0',\nE     -                maxFeePerGas='0x77359400',\nE     -                maxPriorityFeePerGas='0x3b9aca00',\nE     -                paymasterAndData='0x',\nE     -                signature='0x'),\nE       ]"
          }
        },
        "2": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender[]",
          "time": "0.135",
          "failure": {
            "message": "AssertionError: assert [] == [UserOperatio...gnature='0x')]\n  Right contains one more item: UserOperation(sender='0x378119Cbd3f021f7bFaaA68DA98F961235BC98B0', nonce='0x0', initCode='0x', callData='0xa9e966b7000...tionGas='0x493e0', maxFeePerGas='0x77359400', maxPriorityFeePerGas='0x3b9aca00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  +  ,\n  -  UserOperation(sender='0x378119Cbd3f021f7bFaaA68DA98F961235BC98B0',\n  -                nonce='0x0',\n  -                initCode='0x',\n  -                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n  -                callGasLimit='0x493e0',\n  -                verificationGasLimit='0xf4240',\n  -                preVerificationGas='0x493e0',\n  -                maxFeePerGas='0x77359400',\n  -                maxPriorityFeePerGas='0x3b9aca00',\n  -                paymasterAndData='0x',\n  -                signature='0x'),\n    ]",
            "#text": "tests/bundle/test_bundle.py:60: in test_max_allowed_ops_unstaked_sender\n    assert dump_mempool() == wallet_ops[: i + 1]\nE   AssertionError: assert [] == [UserOperatio...gnature='0x')]\nE     Right contains one more item: UserOperation(sender='0x378119Cbd3f021f7bFaaA68DA98F961235BC98B0', nonce='0x0', initCode='0x', callData='0xa9e966b7000...tionGas='0x493e0', maxFeePerGas='0x77359400', maxPriorityFeePerGas='0x3b9aca00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     +  ,\nE     -  UserOperation(sender='0x378119Cbd3f021f7bFaaA68DA98F961235BC98B0',\nE     -                nonce='0x0',\nE     -                initCode='0x',\nE     -                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE     -                callGasLimit='0x493e0',\nE     -                verificationGasLimit='0xf4240',\nE     -                preVerificationGas='0x493e0',\nE     -                maxFeePerGas='0x77359400',\nE     -                maxPriorityFeePerGas='0x3b9aca00',\nE     -                paymasterAndData='0x',\nE     -                signature='0x'),\nE       ]"
          }
        },
        "3": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender[]",
          "time": "0.162",
          "failure": {
            "message": "AssertionError: assert [] == [UserOperatio...gnature='0x')]\n  Right contains one more item: UserOperation(sender='0x257030E8e7206DadD522C9DA418C4f782f47032F', nonce='0x0', initCode='0x', callData='0xa9e966b7000...tionGas='0x493e0', maxFeePerGas='0x77359400', maxPriorityFeePerGas='0x3b9aca00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  +  ,\n  -  UserOperation(sender='0x257030E8e7206DadD522C9DA418C4f782f47032F',\n  -                nonce='0x0',\n  -                initCode='0x',\n  -                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n  -                callGasLimit='0x493e0',\n  -                verificationGasLimit='0xf4240',\n  -                preVerificationGas='0x493e0',\n  -                maxFeePerGas='0x77359400',\n  -                maxPriorityFeePerGas='0x3b9aca00',\n  -                paymasterAndData='0x',\n  -                signature='0x'),\n    ]",
            "#text": "tests/bundle/test_bundle.py:86: in test_max_allowed_ops_staked_sender\n    assert dump_mempool() == wallet_ops[: i + 1]\nE   AssertionError: assert [] == [UserOperatio...gnature='0x')]\nE     Right contains one more item: UserOperation(sender='0x257030E8e7206DadD522C9DA418C4f782f47032F', nonce='0x0', initCode='0x', callData='0xa9e966b7000...tionGas='0x493e0', maxFeePerGas='0x77359400', maxPriorityFeePerGas='0x3b9aca00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     +  ,\nE     -  UserOperation(sender='0x257030E8e7206DadD522C9DA418C4f782f47032F',\nE     -                nonce='0x0',\nE     -                initCode='0x',\nE     -                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE     -                callGasLimit='0x493e0',\nE     -                verificationGasLimit='0xf4240',\nE     -                preVerificationGas='0x493e0',\nE     -                maxFeePerGas='0x77359400',\nE     -                maxPriorityFeePerGas='0x3b9aca00',\nE     -                paymasterAndData='0x',\nE     -                signature='0x'),\nE       ]"
          }
        },
        "4": {
          "classname": "tests.bundle.test_codehash",
          "name": "test_codehash_changed[]",
          "time": "0.119",
          "failure": {
            "message": "AssertionError: assert [] == [UserOperatio...gnature='0x')]\n  Right contains one more item: UserOperation(sender='0x7E1Ce5e6C438fDB50F96f93856453044752d20C5', nonce='0x0', initCode='0x', callData='0x', callGasL...tionGas='0x493e0', maxFeePerGas='0x77359400', maxPriorityFeePerGas='0x3b9aca00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  +  ,\n  -  UserOperation(sender='0x7E1Ce5e6C438fDB50F96f93856453044752d20C5',\n  -                nonce='0x0',\n  -                initCode='0x',\n  -                callData='0x',\n  -                callGasLimit='0x493e0',\n  -                verificationGasLimit='0xf4240',\n  -                preVerificationGas='0x493e0',\n  -                maxFeePerGas='0x77359400',\n  -                maxPriorityFeePerGas='0x3b9aca00',\n  -                paymasterAndData='0x',\n  -                signature='0x'),\n    ]",
            "#text": "tests/bundle/test_codehash.py:45: in test_codehash_changed\n    assert dump_mempool() == [userop]\nE   AssertionError: assert [] == [UserOperatio...gnature='0x')]\nE     Right contains one more item: UserOperation(sender='0x7E1Ce5e6C438fDB50F96f93856453044752d20C5', nonce='0x0', initCode='0x', callData='0x', callGasL...tionGas='0x493e0', maxFeePerGas='0x77359400', maxPriorityFeePerGas='0x3b9aca00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     +  ,\nE     -  UserOperation(sender='0x7E1Ce5e6C438fDB50F96f93856453044752d20C5',\nE     -                nonce='0x0',\nE     -                initCode='0x',\nE     -                callData='0x',\nE     -                callGasLimit='0x493e0',\nE     -                verificationGasLimit='0xf4240',\nE     -                preVerificationGas='0x493e0',\nE     -                maxFeePerGas='0x77359400',\nE     -                maxPriorityFeePerGas='0x3b9aca00',\nE     -                paymasterAndData='0x',\nE     -                signature='0x'),\nE       ]"
          }
        },
        "5": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][no_storage][ok]",
          "time": "0.199"
        },
        "6": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][storage][drop]",
          "time": "0.201"
        },
        "7": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage][drop]",
          "time": "0.206"
        },
        "8": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.215"
        },
        "9": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_storage][ok]",
          "time": "0.207"
        },
        "10": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.209"
        },
        "11": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.213"
        },
        "12": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_init_code][drop]",
          "time": "0.411"
        },
        "13": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][context][drop]",
          "time": "0.205",
          "failure": {
            "message": "AttributeError: 'Ok' object has no attribute 'message'",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\nE   AttributeError: 'Ok' object has no attribute 'message'"
          }
        },
        "14": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][external_storage][drop]",
          "time": "0.209"
        },
        "15": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][no_storage][ok]",
          "time": "0.227"
        },
        "16": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][storage][ok]",
          "time": "0.233"
        },
        "17": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage][ok]",
          "time": "0.242"
        },
        "18": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage_struct][ok]",
          "time": "0.250"
        },
        "19": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_storage][ok]",
          "time": "0.236"
        },
        "20": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage][ok]",
          "time": "0.248"
        },
        "21": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.248"
        },
        "22": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.441"
        },
        "23": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][context][ok]",
          "time": "0.231"
        },
        "24": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][external_storage][drop]",
          "time": "0.244"
        },
        "25": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][no_storage][ok]",
          "time": "0.259"
        },
        "26": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][storage][drop]",
          "time": "0.257"
        },
        "27": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage][drop]",
          "time": "0.270",
          "failure": {
            "message": "AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32500 = Error(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=61).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32500 = Error(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=61).code"
          }
        },
        "28": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage_struct][drop]",
          "time": "0.275"
        },
        "29": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_storage][ok]",
          "time": "0.271"
        },
        "30": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage][drop]",
          "time": "0.275"
        },
        "31": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.274"
        },
        "32": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][external_storage][drop]",
          "time": "0.269"
        },
        "33": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][no_storage][ok]",
          "time": "0.292"
        },
        "34": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][storage][ok]",
          "time": "0.301"
        },
        "35": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage][ok]",
          "time": "0.305"
        },
        "36": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage_struct][ok]",
          "time": "0.305"
        },
        "37": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_storage][ok]",
          "time": "0.306"
        },
        "38": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage][ok]",
          "time": "0.305",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=83)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=83)"
          }
        },
        "39": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage_struct][ok]",
          "time": "0.345"
        },
        "40": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][external_storage][drop]",
          "time": "0.304"
        },
        "41": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][no_storage][ok]",
          "time": "0.126"
        },
        "42": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_storage][ok]",
          "time": "0.127"
        },
        "43": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage][ok]",
          "time": "0.133"
        },
        "44": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.136"
        },
        "45": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][external_storage][drop]",
          "time": "0.138"
        },
        "46": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][no_storage][ok]",
          "time": "0.157"
        },
        "47": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_storage][ok]",
          "time": "0.156"
        },
        "48": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage][ok]",
          "time": "0.169"
        },
        "49": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage_struct][ok]",
          "time": "0.175"
        },
        "50": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][external_storage][drop]",
          "time": "0.168"
        },
        "51": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.118"
        },
        "52": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.116"
        },
        "53": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.122"
        },
        "54": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.119"
        },
        "55": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.119"
        },
        "56": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.124"
        },
        "57": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.121"
        },
        "58": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.119"
        },
        "59": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.120"
        },
        "60": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.227"
        },
        "61": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.121"
        },
        "62": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.120"
        },
        "63": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.128"
        },
        "64": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.125"
        },
        "65": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.128"
        },
        "66": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.206"
        },
        "67": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.201"
        },
        "68": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.202"
        },
        "69": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.208"
        },
        "70": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.203"
        },
        "71": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.206"
        },
        "72": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.201"
        },
        "73": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.209"
        },
        "74": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.204"
        },
        "75": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.206"
        },
        "76": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.208"
        },
        "77": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.204"
        },
        "78": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.210"
        },
        "79": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.205"
        },
        "80": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.198"
        },
        "81": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.269",
          "failure": {
            "message": "AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32500 = Error(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=138).code",
            "#text": "tests/opbanning/test_op_banning.py:69: in test_factory_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32500 = Error(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=138).code"
          }
        },
        "82": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.260"
        },
        "83": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.271"
        },
        "84": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.268"
        },
        "85": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.261",
          "failure": {
            "message": "AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32500 = Error(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=142).code",
            "#text": "tests/opbanning/test_op_banning.py:69: in test_factory_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32500 = Error(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=142).code"
          }
        },
        "86": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.262"
        },
        "87": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.263"
        },
        "88": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.268"
        },
        "89": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.271"
        },
        "90": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.273"
        },
        "91": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.264"
        },
        "92": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.272"
        },
        "93": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.270"
        },
        "94": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.272"
        },
        "95": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.267"
        },
        "96": {
          "classname": "tests.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.011"
        },
        "97": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.078"
        },
        "98": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.079"
        },
        "99": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.051"
        },
        "100": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "0.090",
          "failure": {
            "message": "AttributeError: 'Error' object has no attribute 'result'",
            "#text": "tests/rpc/test_eth_getUserOperationByHash.py:16: in test_eth_getUserOperationByHash\n    ) == userop_hash(helper_contract, userop), \"user operation mismatch\"\nE   AttributeError: 'Error' object has no attribute 'result'"
          }
        },
        "101": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.003",
          "failure": {
            "message": "AssertionError: assert 'Missing/invalid userOpHash' in 'Method not found'\n +  where 'Method not found' = Error(code=-32601, message='Method not found', data=None, id=160).message",
            "#text": "tests/rpc/test_eth_getUserOperationByHash.py:28: in test_eth_getUserOperationByHash_error\n    assert_rpc_error(response, \"Missing/invalid userOpHash\", -32601)\ntests/utils.py:101: in assert_rpc_error\n    assert message in response.message\nE   AssertionError: assert 'Missing/invalid userOpHash' in 'Method not found'\nE    +  where 'Method not found' = Error(code=-32601, message='Method not found', data=None, id=160).message"
          }
        },
        "102": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.088",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/rpc/test_eth_getUserOperationReceipt.py:15: in test_eth_getUserOperationReceipt\n    assert response.result[\"userOpHash\"] == userop_hash(helper_contract, userop)\nE   TypeError: 'NoneType' object is not subscriptable"
          }
        },
        "103": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.003",
          "failure": {
            "message": "AssertionError: assert -32602 == -32601\n +  where -32602 = Error(code=-32602, message='invalid length 0, expected a (both 0x-prefixed or not) hex string or byte array containing 32 bytes at line 1 column 2', data=None, id=164).code",
            "#text": "tests/rpc/test_eth_getUserOperationReceipt.py:26: in test_eth_getUserOperationReceipt_error\n    assert_rpc_error(response, \"Missing/invalid userOpHash\", -32601)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32602 == -32601\nE    +  where -32602 = Error(code=-32602, message='invalid length 0, expected a (both 0x-prefixed or not) hex string or byte array containing 32 bytes at line 1 column 2', data=None, id=164).code"
          }
        },
        "104": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.147",
          "failure": {
            "message": "assert 0 == 1111111",
            "#text": "tests/rpc/test_eth_sendUserOperation.py:20: in test_eth_sendUserOperation\n    assert state_after == 1111111\nE   assert 0 == 1111111"
          }
        },
        "105": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.067"
        },
        "106": {
          "classname": "tests.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.011"
        }
      }
    }
  },
  "20230307/173401": {
    "stackup-bundler-launcher": {
      "name": "Stackup Bundler",
      "errors": "0",
      "failures": "1",
      "skipped": "1",
      "tests": "107",
      "time": "36.820",
      "timestamp": "2023-03-07T17:33:22.680103",
      "hostname": "fv-az577-132",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_bundle_replace_by_fee[]",
          "time": "0.144",
          "failure": {
            "message": "AttributeError: 'Error' object has no attribute 'result'",
            "#text": "tests/bundle/test_bundle.py:42: in test_bundle_replace_by_fee\n    assert higher_fee_op.send().result\nE   AttributeError: 'Error' object has no attribute 'result'"
          }
        },
        "2": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender[]",
          "time": "0.429"
        },
        "3": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender[]",
          "time": "0.507"
        },
        "4": {
          "classname": "tests.bundle.test_codehash",
          "name": "test_codehash_changed[]",
          "time": "0.607"
        },
        "5": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][no_storage][ok]",
          "time": "0.286"
        },
        "6": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][storage][drop]",
          "time": "0.277"
        },
        "7": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage][drop]",
          "time": "0.275"
        },
        "8": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.282"
        },
        "9": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_storage][ok]",
          "time": "0.287"
        },
        "10": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.287"
        },
        "11": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.293"
        },
        "12": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_init_code][drop]",
          "time": "0.531"
        },
        "13": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][context][drop]",
          "time": "0.269"
        },
        "14": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][external_storage][drop]",
          "time": "0.276"
        },
        "15": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][no_storage][ok]",
          "time": "0.311"
        },
        "16": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][storage][ok]",
          "time": "0.310"
        },
        "17": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage][ok]",
          "time": "0.316"
        },
        "18": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage_struct][ok]",
          "time": "0.335"
        },
        "19": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_storage][ok]",
          "time": "0.318"
        },
        "20": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage][ok]",
          "time": "0.318"
        },
        "21": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.329"
        },
        "22": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.544"
        },
        "23": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][context][ok]",
          "time": "0.315"
        },
        "24": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][external_storage][drop]",
          "time": "0.330"
        },
        "25": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][no_storage][ok]",
          "time": "0.335"
        },
        "26": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][storage][drop]",
          "time": "0.342"
        },
        "27": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage][drop]",
          "time": "0.337"
        },
        "28": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage_struct][drop]",
          "time": "0.356"
        },
        "29": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_storage][ok]",
          "time": "0.356"
        },
        "30": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage][drop]",
          "time": "0.354"
        },
        "31": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.353"
        },
        "32": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][external_storage][drop]",
          "time": "0.468"
        },
        "33": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][no_storage][ok]",
          "time": "0.393"
        },
        "34": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][storage][ok]",
          "time": "0.390"
        },
        "35": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage][ok]",
          "time": "0.400"
        },
        "36": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage_struct][ok]",
          "time": "0.407"
        },
        "37": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_storage][ok]",
          "time": "0.400"
        },
        "38": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage][ok]",
          "time": "0.388"
        },
        "39": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage_struct][ok]",
          "time": "0.403"
        },
        "40": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][external_storage][drop]",
          "time": "0.387"
        },
        "41": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][no_storage][ok]",
          "time": "0.179"
        },
        "42": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_storage][ok]",
          "time": "0.181"
        },
        "43": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage][ok]",
          "time": "0.193"
        },
        "44": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.197"
        },
        "45": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][external_storage][drop]",
          "time": "0.223"
        },
        "46": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][no_storage][ok]",
          "time": "0.218"
        },
        "47": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_storage][ok]",
          "time": "0.219"
        },
        "48": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage][ok]",
          "time": "0.229"
        },
        "49": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage_struct][ok]",
          "time": "0.257"
        },
        "50": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][external_storage][drop]",
          "time": "0.231"
        },
        "51": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.152"
        },
        "52": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.147"
        },
        "53": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.153"
        },
        "54": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.148"
        },
        "55": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.151"
        },
        "56": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.155"
        },
        "57": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.146"
        },
        "58": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.153"
        },
        "59": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.148"
        },
        "60": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.156"
        },
        "61": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.158"
        },
        "62": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.151"
        },
        "63": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.158"
        },
        "64": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.155"
        },
        "65": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.164"
        },
        "66": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.255"
        },
        "67": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.247"
        },
        "68": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.251"
        },
        "69": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.257"
        },
        "70": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.262"
        },
        "71": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.256"
        },
        "72": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.256"
        },
        "73": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.267"
        },
        "74": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.252"
        },
        "75": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.256"
        },
        "76": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.248"
        },
        "77": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.284"
        },
        "78": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.257"
        },
        "79": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.245"
        },
        "80": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.248"
        },
        "81": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.323"
        },
        "82": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.323"
        },
        "83": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.319"
        },
        "84": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.327"
        },
        "85": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.327"
        },
        "86": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.340"
        },
        "87": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.333"
        },
        "88": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.335"
        },
        "89": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.332"
        },
        "90": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.319"
        },
        "91": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.334"
        },
        "92": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.325"
        },
        "93": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.332"
        },
        "94": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.343"
        },
        "95": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.324"
        },
        "96": {
          "classname": "tests.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.012"
        },
        "97": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.068"
        },
        "98": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.065"
        },
        "99": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.062"
        },
        "100": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "0.186"
        },
        "101": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.007"
        },
        "102": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.179"
        },
        "103": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.008"
        },
        "104": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.147"
        },
        "105": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.119"
        },
        "106": {
          "classname": "tests.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.012"
        }
      }
    },
    "skandha-launcher": {
      "name": "Skandha Bundler",
      "errors": "2",
      "failures": "5",
      "skipped": "1",
      "tests": "107",
      "time": "77.416",
      "timestamp": "2023-03-07T17:31:52.530478",
      "hostname": "fv-az577-132",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_bundle_replace_by_fee[]",
          "time": "0.612"
        },
        "2": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender[]",
          "time": "0.926",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_bundle.py:64: in test_max_allowed_ops_unstaked_sender\n    send_bundle_now()\ntests/utils.py:124: in send_bundle_now\n    RPCRequest(method=\"debug_bundler_sendBundleNow\").send()\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "3": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender[]",
          "time": "0.929",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_bundle.py:88: in test_max_allowed_ops_staked_sender\n    send_bundle_now()\ntests/utils.py:124: in send_bundle_now\n    RPCRequest(method=\"debug_bundler_sendBundleNow\").send()\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "4": {
          "classname": "tests.bundle.test_codehash",
          "name": "test_codehash_changed[]",
          "time": "0.702",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/bundle/test_codehash.py:73: in test_codehash_changed\n    send_bundle_now()\ntests/utils.py:124: in send_bundle_now\n    RPCRequest(method=\"debug_bundler_sendBundleNow\").send()\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "5": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][no_storage][ok]",
          "time": "0.313"
        },
        "6": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][storage][drop]",
          "time": "0.274"
        },
        "7": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage][drop]",
          "time": "0.289"
        },
        "8": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.294"
        },
        "9": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_storage][ok]",
          "time": "0.333"
        },
        "10": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.437"
        },
        "11": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.352"
        },
        "12": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_init_code][drop]",
          "time": "0.535"
        },
        "13": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][context][drop]",
          "time": "0.311"
        },
        "14": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][external_storage][drop]",
          "time": "0.305"
        },
        "15": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][no_storage][ok]",
          "time": "0.355"
        },
        "16": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][storage][ok]",
          "time": "0.364"
        },
        "17": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage][ok]",
          "time": "0.359"
        },
        "18": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage_struct][ok]",
          "time": "0.387"
        },
        "19": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_storage][ok]",
          "time": "0.362"
        },
        "20": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage][ok]",
          "time": "0.375"
        },
        "21": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.383"
        },
        "22": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.645"
        },
        "23": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][context][ok]",
          "time": "0.396"
        },
        "24": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][external_storage][drop]",
          "time": "0.369"
        },
        "25": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][no_storage][ok]",
          "time": "0.413"
        },
        "26": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][storage][drop]",
          "time": "0.363"
        },
        "27": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage][drop]",
          "time": "0.369"
        },
        "28": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage_struct][drop]",
          "time": "0.406"
        },
        "29": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_storage][ok]",
          "time": "0.437"
        },
        "30": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage][drop]",
          "time": "0.377"
        },
        "31": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.385"
        },
        "32": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][external_storage][drop]",
          "time": "0.370"
        },
        "33": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][no_storage][ok]",
          "time": "0.547"
        },
        "34": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][storage][ok]",
          "time": "0.447"
        },
        "35": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage][ok]",
          "time": "0.460"
        },
        "36": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage_struct][ok]",
          "time": "0.474"
        },
        "37": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_storage][ok]",
          "time": "0.471"
        },
        "38": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage][ok]",
          "time": "0.478"
        },
        "39": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage_struct][ok]",
          "time": "0.486"
        },
        "40": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][external_storage][drop]",
          "time": "0.445"
        },
        "41": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][no_storage][ok]",
          "time": "0.282"
        },
        "42": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_storage][ok]",
          "time": "0.325"
        },
        "43": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage][ok]",
          "time": "0.299"
        },
        "44": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.295"
        },
        "45": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][external_storage][drop]",
          "time": "0.259"
        },
        "46": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][no_storage][ok]",
          "time": "0.310"
        },
        "47": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_storage][ok]",
          "time": "0.316"
        },
        "48": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage][ok]",
          "time": "0.331"
        },
        "49": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage_struct][ok]",
          "time": "0.339"
        },
        "50": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][external_storage][drop]",
          "time": "0.302"
        },
        "51": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.177"
        },
        "52": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.190"
        },
        "53": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.193"
        },
        "54": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.196"
        },
        "55": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.200"
        },
        "56": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.207"
        },
        "57": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.203"
        },
        "58": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.210"
        },
        "59": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.215"
        },
        "60": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.222"
        },
        "61": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.214"
        },
        "62": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.232"
        },
        "63": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.231"
        },
        "64": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.227"
        },
        "65": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.238"
        },
        "66": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.320"
        },
        "67": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.335"
        },
        "68": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.331"
        },
        "69": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.324"
        },
        "70": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.316"
        },
        "71": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.336"
        },
        "72": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.339"
        },
        "73": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.329"
        },
        "74": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.340"
        },
        "75": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.354"
        },
        "76": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.352"
        },
        "77": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.366"
        },
        "78": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.351"
        },
        "79": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.361"
        },
        "80": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.306"
        },
        "81": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.371"
        },
        "82": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.389"
        },
        "83": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.406"
        },
        "84": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.392"
        },
        "85": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.400"
        },
        "86": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.416"
        },
        "87": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.394"
        },
        "88": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.405"
        },
        "89": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.426"
        },
        "90": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.412"
        },
        "91": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.426"
        },
        "92": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.414"
        },
        "93": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.436"
        },
        "94": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.456"
        },
        "95": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.375"
        },
        "96": {
          "classname": "tests.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.016"
        },
        "97": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.140"
        },
        "98": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.075"
        },
        "99": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.068"
        },
        "100": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "0.274",
          "error": {
            "message": "failed on setup with \"TypeError: string indices must be integers\"",
            "#text": "tests/conftest.py:105: in execute_user_operation\n    send_bundle_now()\ntests/utils.py:124: in send_bundle_now\n    RPCRequest(method=\"debug_bundler_sendBundleNow\").send()\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "101": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.012"
        },
        "102": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.395",
          "error": {
            "message": "failed on setup with \"TypeError: string indices must be integers\"",
            "#text": "tests/conftest.py:105: in execute_user_operation\n    send_bundle_now()\ntests/utils.py:124: in send_bundle_now\n    RPCRequest(method=\"debug_bundler_sendBundleNow\").send()\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "103": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.006"
        },
        "104": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.469",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/rpc/test_eth_sendUserOperation.py:17: in test_eth_sendUserOperation\n    send_bundle_now()\ntests/utils.py:124: in send_bundle_now\n    RPCRequest(method=\"debug_bundler_sendBundleNow\").send()\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "105": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.427",
          "failure": {
            "message": "TypeError: string indices must be integers",
            "#text": "tests/rpc/test_eth_sendUserOperation.py:29: in test_eth_sendUserOperation_revert\n    send_bundle_now()\ntests/utils.py:124: in send_bundle_now\n    RPCRequest(method=\"debug_bundler_sendBundleNow\").send()\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   TypeError: string indices must be integers"
          }
        },
        "106": {
          "classname": "tests.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.014"
        }
      }
    },
    "aabundler-launcher": {
      "name": "AA-Reference-Bundler/0.5.0",
      "errors": "0",
      "failures": "0",
      "skipped": "1",
      "tests": "107",
      "time": "44.070",
      "timestamp": "2023-03-07T17:30:55.859400",
      "hostname": "fv-az577-132",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_bundle_replace_by_fee[]",
          "time": "0.339"
        },
        "2": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender[]",
          "time": "0.660"
        },
        "3": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender[]",
          "time": "0.651"
        },
        "4": {
          "classname": "tests.bundle.test_codehash",
          "name": "test_codehash_changed[]",
          "time": "0.775"
        },
        "5": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][no_storage][ok]",
          "time": "0.267"
        },
        "6": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][storage][drop]",
          "time": "0.253"
        },
        "7": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage][drop]",
          "time": "0.266"
        },
        "8": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.258"
        },
        "9": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_storage][ok]",
          "time": "0.269"
        },
        "10": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.274"
        },
        "11": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.280"
        },
        "12": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_init_code][drop]",
          "time": "0.480"
        },
        "13": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][context][drop]",
          "time": "0.248"
        },
        "14": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][external_storage][drop]",
          "time": "0.267"
        },
        "15": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][no_storage][ok]",
          "time": "0.314"
        },
        "16": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][storage][ok]",
          "time": "0.292"
        },
        "17": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage][ok]",
          "time": "0.305"
        },
        "18": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage_struct][ok]",
          "time": "0.326"
        },
        "19": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_storage][ok]",
          "time": "0.313"
        },
        "20": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage][ok]",
          "time": "0.308"
        },
        "21": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.328"
        },
        "22": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.556"
        },
        "23": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][context][ok]",
          "time": "0.327"
        },
        "24": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][external_storage][drop]",
          "time": "0.308"
        },
        "25": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][no_storage][ok]",
          "time": "0.347"
        },
        "26": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][storage][drop]",
          "time": "0.323"
        },
        "27": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage][drop]",
          "time": "0.351"
        },
        "28": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage_struct][drop]",
          "time": "0.345"
        },
        "29": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_storage][ok]",
          "time": "0.369"
        },
        "30": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage][drop]",
          "time": "0.337"
        },
        "31": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.343"
        },
        "32": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][external_storage][drop]",
          "time": "0.340"
        },
        "33": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][no_storage][ok]",
          "time": "0.390"
        },
        "34": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][storage][ok]",
          "time": "0.385"
        },
        "35": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage][ok]",
          "time": "0.380"
        },
        "36": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage_struct][ok]",
          "time": "0.419"
        },
        "37": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_storage][ok]",
          "time": "0.413"
        },
        "38": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage][ok]",
          "time": "0.431"
        },
        "39": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage_struct][ok]",
          "time": "0.422"
        },
        "40": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][external_storage][drop]",
          "time": "0.377"
        },
        "41": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][no_storage][ok]",
          "time": "0.173"
        },
        "42": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_storage][ok]",
          "time": "0.178"
        },
        "43": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage][ok]",
          "time": "0.189"
        },
        "44": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.200"
        },
        "45": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][external_storage][drop]",
          "time": "0.229"
        },
        "46": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][no_storage][ok]",
          "time": "0.233"
        },
        "47": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_storage][ok]",
          "time": "0.223"
        },
        "48": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage][ok]",
          "time": "0.237"
        },
        "49": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage_struct][ok]",
          "time": "0.234"
        },
        "50": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][external_storage][drop]",
          "time": "0.219"
        },
        "51": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.153"
        },
        "52": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.155"
        },
        "53": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.159"
        },
        "54": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.154"
        },
        "55": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.168"
        },
        "56": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.154"
        },
        "57": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.154"
        },
        "58": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.159"
        },
        "59": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.152"
        },
        "60": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.157"
        },
        "61": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.154"
        },
        "62": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.153"
        },
        "63": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.156"
        },
        "64": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.161"
        },
        "65": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.172"
        },
        "66": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.258"
        },
        "67": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.268"
        },
        "68": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.255"
        },
        "69": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.269"
        },
        "70": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.248"
        },
        "71": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.259"
        },
        "72": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.258"
        },
        "73": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.265"
        },
        "74": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.252"
        },
        "75": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.263"
        },
        "76": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.260"
        },
        "77": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.274"
        },
        "78": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.266"
        },
        "79": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.263"
        },
        "80": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.256"
        },
        "81": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.319"
        },
        "82": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.319"
        },
        "83": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.323"
        },
        "84": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.342"
        },
        "85": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.341"
        },
        "86": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.325"
        },
        "87": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.332"
        },
        "88": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.328"
        },
        "89": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.329"
        },
        "90": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.338"
        },
        "91": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.348"
        },
        "92": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.344"
        },
        "93": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.344"
        },
        "94": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.337"
        },
        "95": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.329"
        },
        "96": {
          "classname": "tests.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.016"
        },
        "97": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.090"
        },
        "98": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.077"
        },
        "99": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.065"
        },
        "100": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "0.374"
        },
        "101": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.004"
        },
        "102": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.293"
        },
        "103": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.004"
        },
        "104": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.239"
        },
        "105": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.114"
        },
        "106": {
          "classname": "tests.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.014"
        }
      }
    },
    "aa-bundler-rust-launcher": {
      "name": "aa-bundler in Rust",
      "errors": "0",
      "failures": "89",
      "skipped": "1",
      "tests": "107",
      "time": "39.937",
      "timestamp": "2023-03-07T17:30:02.917664",
      "hostname": "fv-az577-132",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_bundle_replace_by_fee[]",
          "time": "0.114",
          "failure": {
            "message": "AttributeError: 'Error' object has no attribute 'result'",
            "#text": "tests/bundle/test_bundle.py:40: in test_bundle_replace_by_fee\n    assert lower_fee_op.send().result\nE   AttributeError: 'Error' object has no attribute 'result'"
          }
        },
        "2": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender[]",
          "time": "0.164",
          "failure": {
            "message": "AssertionError: assert [] == [UserOperatio...gnature='0x')]\n  Right contains one more item: UserOperation(sender='0xFF3484CfEAE39408E413986B4f3Cd1c324d7945e', nonce='0x0', initCode='0x', callData='0xa9e966b7000...tionGas='0x493e0', maxFeePerGas='0x77359400', maxPriorityFeePerGas='0x3b9aca00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  +  ,\n  -  UserOperation(sender='0xFF3484CfEAE39408E413986B4f3Cd1c324d7945e',\n  -                nonce='0x0',\n  -                initCode='0x',\n  -                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n  -                callGasLimit='0x493e0',\n  -                verificationGasLimit='0xf4240',\n  -                preVerificationGas='0x493e0',\n  -                maxFeePerGas='0x77359400',\n  -                maxPriorityFeePerGas='0x3b9aca00',\n  -                paymasterAndData='0x',\n  -                signature='0x'),\n    ]",
            "#text": "tests/bundle/test_bundle.py:60: in test_max_allowed_ops_unstaked_sender\n    assert dump_mempool() == wallet_ops[: i + 1]\nE   AssertionError: assert [] == [UserOperatio...gnature='0x')]\nE     Right contains one more item: UserOperation(sender='0xFF3484CfEAE39408E413986B4f3Cd1c324d7945e', nonce='0x0', initCode='0x', callData='0xa9e966b7000...tionGas='0x493e0', maxFeePerGas='0x77359400', maxPriorityFeePerGas='0x3b9aca00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     +  ,\nE     -  UserOperation(sender='0xFF3484CfEAE39408E413986B4f3Cd1c324d7945e',\nE     -                nonce='0x0',\nE     -                initCode='0x',\nE     -                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE     -                callGasLimit='0x493e0',\nE     -                verificationGasLimit='0xf4240',\nE     -                preVerificationGas='0x493e0',\nE     -                maxFeePerGas='0x77359400',\nE     -                maxPriorityFeePerGas='0x3b9aca00',\nE     -                paymasterAndData='0x',\nE     -                signature='0x'),\nE       ]"
          }
        },
        "3": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender[]",
          "time": "0.193",
          "failure": {
            "message": "AssertionError: assert [] == [UserOperatio...gnature='0x')]\n  Right contains one more item: UserOperation(sender='0x1a7c454E212A542547bBe806fAFed15F832F5894', nonce='0x0', initCode='0x', callData='0xa9e966b7000...tionGas='0x493e0', maxFeePerGas='0x77359400', maxPriorityFeePerGas='0x3b9aca00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  +  ,\n  -  UserOperation(sender='0x1a7c454E212A542547bBe806fAFed15F832F5894',\n  -                nonce='0x0',\n  -                initCode='0x',\n  -                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n  -                callGasLimit='0x493e0',\n  -                verificationGasLimit='0xf4240',\n  -                preVerificationGas='0x493e0',\n  -                maxFeePerGas='0x77359400',\n  -                maxPriorityFeePerGas='0x3b9aca00',\n  -                paymasterAndData='0x',\n  -                signature='0x'),\n    ]",
            "#text": "tests/bundle/test_bundle.py:86: in test_max_allowed_ops_staked_sender\n    assert dump_mempool() == wallet_ops[: i + 1]\nE   AssertionError: assert [] == [UserOperatio...gnature='0x')]\nE     Right contains one more item: UserOperation(sender='0x1a7c454E212A542547bBe806fAFed15F832F5894', nonce='0x0', initCode='0x', callData='0xa9e966b7000...tionGas='0x493e0', maxFeePerGas='0x77359400', maxPriorityFeePerGas='0x3b9aca00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     +  ,\nE     -  UserOperation(sender='0x1a7c454E212A542547bBe806fAFed15F832F5894',\nE     -                nonce='0x0',\nE     -                initCode='0x',\nE     -                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE     -                callGasLimit='0x493e0',\nE     -                verificationGasLimit='0xf4240',\nE     -                preVerificationGas='0x493e0',\nE     -                maxFeePerGas='0x77359400',\nE     -                maxPriorityFeePerGas='0x3b9aca00',\nE     -                paymasterAndData='0x',\nE     -                signature='0x'),\nE       ]"
          }
        },
        "4": {
          "classname": "tests.bundle.test_codehash",
          "name": "test_codehash_changed[]",
          "time": "0.112",
          "failure": {
            "message": "AttributeError: 'Error' object has no attribute 'result'",
            "#text": "tests/bundle/test_codehash.py:44: in test_codehash_changed\n    assert response.result, \"userop dropped by bundler\"\nE   AttributeError: 'Error' object has no attribute 'result'"
          }
        },
        "5": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][no_storage][ok]",
          "time": "0.202",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=15)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=15)"
          }
        },
        "6": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][storage][drop]",
          "time": "0.209",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=17).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=17).code"
          }
        },
        "7": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage][drop]",
          "time": "0.211",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=19).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=19).code"
          }
        },
        "8": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.213",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=21).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=21).code"
          }
        },
        "9": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_storage][ok]",
          "time": "0.207",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=23)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=23)"
          }
        },
        "10": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.201",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=25)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=25)"
          }
        },
        "11": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.202",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=27)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=27)"
          }
        },
        "12": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_init_code][drop]",
          "time": "0.485",
          "failure": {
            "message": "assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=29).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=29).code"
          }
        },
        "13": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][context][drop]",
          "time": "0.193",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=31).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=31).code"
          }
        },
        "14": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][external_storage][drop]",
          "time": "0.190",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=33).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=33).code"
          }
        },
        "15": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][no_storage][ok]",
          "time": "0.252",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=35)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=35)"
          }
        },
        "16": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][storage][ok]",
          "time": "0.254",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=37)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=37)"
          }
        },
        "17": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage][ok]",
          "time": "0.244",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=39)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=39)"
          }
        },
        "18": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage_struct][ok]",
          "time": "0.234",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=41)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=41)"
          }
        },
        "19": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_storage][ok]",
          "time": "0.242",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=43)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=43)"
          }
        },
        "20": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage][ok]",
          "time": "0.234",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=45)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=45)"
          }
        },
        "21": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.236",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=47)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=47)"
          }
        },
        "22": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.530",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=49)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=49)"
          }
        },
        "23": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][context][ok]",
          "time": "0.227",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=51)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=51)"
          }
        },
        "24": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][external_storage][drop]",
          "time": "0.232",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=53).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=53).code"
          }
        },
        "25": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][no_storage][ok]",
          "time": "0.309",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=55)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=55)"
          }
        },
        "26": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][storage][drop]",
          "time": "0.361",
          "failure": {
            "message": "assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=57).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=57).code"
          }
        },
        "27": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage][drop]",
          "time": "0.330",
          "failure": {
            "message": "assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=59).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=59).code"
          }
        },
        "28": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage_struct][drop]",
          "time": "0.330",
          "failure": {
            "message": "assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=61).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=61).code"
          }
        },
        "29": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_storage][ok]",
          "time": "0.339",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=63)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=63)"
          }
        },
        "30": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage][drop]",
          "time": "0.346",
          "failure": {
            "message": "AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32500 = Error(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=65).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32500 = Error(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=65).code"
          }
        },
        "31": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.339",
          "failure": {
            "message": "assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=67).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=67).code"
          }
        },
        "32": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][external_storage][drop]",
          "time": "0.319",
          "failure": {
            "message": "AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32500 = Error(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=69).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32500 = Error(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=69).code"
          }
        },
        "33": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][no_storage][ok]",
          "time": "0.357",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=71)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=71)"
          }
        },
        "34": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][storage][ok]",
          "time": "0.455",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=73)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=73)"
          }
        },
        "35": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage][ok]",
          "time": "0.365",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=75)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=75)"
          }
        },
        "36": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage_struct][ok]",
          "time": "0.373",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=77)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=77)"
          }
        },
        "37": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_storage][ok]",
          "time": "0.463",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=79)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=79)"
          }
        },
        "38": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage][ok]",
          "time": "0.367",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=81)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=81)"
          }
        },
        "39": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage_struct][ok]",
          "time": "0.377",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=83)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=83)"
          }
        },
        "40": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][external_storage][drop]",
          "time": "0.363",
          "failure": {
            "message": "assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=85).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=85).code"
          }
        },
        "41": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][no_storage][ok]",
          "time": "0.127",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=87)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=87)"
          }
        },
        "42": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_storage][ok]",
          "time": "0.121",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=89)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=89)"
          }
        },
        "43": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage][ok]",
          "time": "0.128",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=91)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=91)"
          }
        },
        "44": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.116",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=93)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=93)"
          }
        },
        "45": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][external_storage][drop]",
          "time": "0.119",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=95).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=95).code"
          }
        },
        "46": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][no_storage][ok]",
          "time": "0.156",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=97)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=97)"
          }
        },
        "47": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_storage][ok]",
          "time": "0.152",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=99)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=99)"
          }
        },
        "48": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage][ok]",
          "time": "0.162",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=101)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=101)"
          }
        },
        "49": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage_struct][ok]",
          "time": "0.156",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=103)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=103)"
          }
        },
        "50": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][external_storage][drop]",
          "time": "0.157",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=105).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=105).code"
          }
        },
        "51": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.116",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=106).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=106).code"
          }
        },
        "52": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.113",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=107).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=107).code"
          }
        },
        "53": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.110",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=108).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=108).code"
          }
        },
        "54": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.107",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=109).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=109).code"
          }
        },
        "55": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.121",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=110).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=110).code"
          }
        },
        "56": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.111",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=111).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=111).code"
          }
        },
        "57": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.155",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=112).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=112).code"
          }
        },
        "58": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.109",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=113).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=113).code"
          }
        },
        "59": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.114",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=114).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=114).code"
          }
        },
        "60": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.111",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=115).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=115).code"
          }
        },
        "61": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.111",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=116).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=116).code"
          }
        },
        "62": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.114",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=117).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=117).code"
          }
        },
        "63": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.116",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=118).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=118).code"
          }
        },
        "64": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.117",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=119).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=119).code"
          }
        },
        "65": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.110",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=120).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=120).code"
          }
        },
        "66": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.185",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=121).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=121).code"
          }
        },
        "67": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.191",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=122).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=122).code"
          }
        },
        "68": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.190",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=123).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=123).code"
          }
        },
        "69": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.197",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=124).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=124).code"
          }
        },
        "70": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.195",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=125).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=125).code"
          }
        },
        "71": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.192",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=126).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=126).code"
          }
        },
        "72": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.190",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=127).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=127).code"
          }
        },
        "73": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.204",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=128).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=128).code"
          }
        },
        "74": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.193",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=129).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=129).code"
          }
        },
        "75": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.188",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=130).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=130).code"
          }
        },
        "76": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.195",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=131).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=131).code"
          }
        },
        "77": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.199",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=132).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=132).code"
          }
        },
        "78": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.195",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=133).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=133).code"
          }
        },
        "79": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.191",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=134).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=134).code"
          }
        },
        "80": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.192",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=135).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=135).code"
          }
        },
        "81": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.306"
        },
        "82": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.311"
        },
        "83": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.314"
        },
        "84": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.316"
        },
        "85": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.315"
        },
        "86": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.309"
        },
        "87": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.353"
        },
        "88": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.314"
        },
        "89": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.317"
        },
        "90": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.317"
        },
        "91": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.332"
        },
        "92": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.317"
        },
        "93": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.327"
        },
        "94": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.327",
          "failure": {
            "message": "assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=149).code",
            "#text": "tests/opbanning/test_op_banning.py:69: in test_factory_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=149).code"
          }
        },
        "95": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.316"
        },
        "96": {
          "classname": "tests.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.015"
        },
        "97": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.072",
          "failure": {
            "message": "jsonschema.exceptions.ValidationError: 'verificationGas' is a required property\n\nFailed validating 'required' in schema:\n    {'properties': {'callGasLimit': {'oneOf': [{'pattern': '^0x([1-9a-f]+[0-9a-f]*|0)$',\n                                                'type': 'string'},\n                                               {'type': 'number'}],\n                                     'title': 'callGasLimit'},\n                    'preVerificationGas': {'oneOf': [{'pattern': '^0x([1-9a-f]+[0-9a-f]*|0)$',\n                                                      'type': 'string'},\n                                                     {'type': 'number'}],\n                                           'title': 'preVerificationGas'},\n                    'verificationGas': {'oneOf': [{'pattern': '^0x([1-9a-f]+[0-9a-f]*|0)$',\n                                                   'type': 'string'},\n                                                  {'type': 'number'}],\n                                        'title': 'verificationGas'}},\n     'required': ['callGasLimit', 'preVerificationGas', 'verificationGas'],\n     'title': 'UserOperation Gas parameters',\n     'type': 'object'}\n\nOn instance:\n    {'callGasLimit': '0xab10',\n     'preVerificationGas': '0xae00',\n     'verificationGasLimit': '0x4c8a1'}",
            "#text": "tests/rpc/test_eth_estimateUserOperationGas.py:20: in test_eth_estimateUserOperationGas\n    validate(instance=response.result, schema=schema)\n.venv/lib/python3.10/site-packages/jsonschema/validators.py:1121: in validate\n    raise error\nE   jsonschema.exceptions.ValidationError: 'verificationGas' is a required property\nE   \nE   Failed validating 'required' in schema:\nE       {'properties': {'callGasLimit': {'oneOf': [{'pattern': '^0x([1-9a-f]+[0-9a-f]*|0)$',\nE                                                   'type': 'string'},\nE                                                  {'type': 'number'}],\nE                                        'title': 'callGasLimit'},\nE                       'preVerificationGas': {'oneOf': [{'pattern': '^0x([1-9a-f]+[0-9a-f]*|0)$',\nE                                                         'type': 'string'},\nE                                                        {'type': 'number'}],\nE                                              'title': 'preVerificationGas'},\nE                       'verificationGas': {'oneOf': [{'pattern': '^0x([1-9a-f]+[0-9a-f]*|0)$',\nE                                                      'type': 'string'},\nE                                                     {'type': 'number'}],\nE                                           'title': 'verificationGas'}},\nE        'required': ['callGasLimit', 'preVerificationGas', 'verificationGas'],\nE        'title': 'UserOperation Gas parameters',\nE        'type': 'object'}\nE   \nE   On instance:\nE       {'callGasLimit': '0xab10',\nE        'preVerificationGas': '0xae00',\nE        'verificationGasLimit': '0x4c8a1'}"
          }
        },
        "98": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.066",
          "failure": {
            "message": "AssertionError: assert -32000 == <RPCErrorCode.EXECUTION_REVERTED: -32521>\n +  where -32000 = Error(code=-32000, message='GRPC error (uopool): error estimating user operation gas', data=None, id=153).code",
            "#text": "tests/rpc/test_eth_estimateUserOperationGas.py:29: in test_eth_estimateUserOperationGas_execution_revert\n    assert_rpc_error(response, \"test fail\", RPCErrorCode.EXECUTION_REVERTED)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32000 == <RPCErrorCode.EXECUTION_REVERTED: -32521>\nE    +  where -32000 = Error(code=-32000, message='GRPC error (uopool): error estimating user operation gas', data=None, id=153).code"
          }
        },
        "99": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.064",
          "failure": {
            "message": "AssertionError: assert -32000 == <RPCErrorCode.REJECTED_BY_EP_OR_ACCOUNT: -32500>\n +  where -32000 = Error(code=-32000, message='GRPC error (uopool): error estimating user operation gas', data=None, id=154).code",
            "#text": "tests/rpc/test_eth_estimateUserOperationGas.py:37: in test_eth_estimateUserOperationGas_simulation_revert\n    assert_rpc_error(response, \"dead signature\", RPCErrorCode.REJECTED_BY_EP_OR_ACCOUNT)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32000 == <RPCErrorCode.REJECTED_BY_EP_OR_ACCOUNT: -32500>\nE    +  where -32000 = Error(code=-32000, message='GRPC error (uopool): error estimating user operation gas', data=None, id=154).code"
          }
        },
        "100": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "0.113",
          "failure": {
            "message": "AttributeError: 'Error' object has no attribute 'result'",
            "#text": "tests/rpc/test_eth_getUserOperationByHash.py:16: in test_eth_getUserOperationByHash\n    ) == userop_hash(helper_contract, userop), \"user operation mismatch\"\nE   AttributeError: 'Error' object has no attribute 'result'"
          }
        },
        "101": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.003",
          "failure": {
            "message": "AssertionError: assert 'Missing/invalid userOpHash' in 'Method not found'\n +  where 'Method not found' = Error(code=-32601, message='Method not found', data=None, id=158).message",
            "#text": "tests/rpc/test_eth_getUserOperationByHash.py:28: in test_eth_getUserOperationByHash_error\n    assert_rpc_error(response, \"Missing/invalid userOpHash\", -32601)\ntests/utils.py:101: in assert_rpc_error\n    assert message in response.message\nE   AssertionError: assert 'Missing/invalid userOpHash' in 'Method not found'\nE    +  where 'Method not found' = Error(code=-32601, message='Method not found', data=None, id=158).message"
          }
        },
        "102": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.113",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/rpc/test_eth_getUserOperationReceipt.py:15: in test_eth_getUserOperationReceipt\n    assert response.result[\"userOpHash\"] == userop_hash(helper_contract, userop)\nE   TypeError: 'NoneType' object is not subscriptable"
          }
        },
        "103": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.004",
          "failure": {
            "message": "AssertionError: assert -32602 == -32601\n +  where -32602 = Error(code=-32602, message='invalid length 0, expected a (both 0x-prefixed or not) hex string or byte array containing 32 bytes at line 1 column 2', data=None, id=162).code",
            "#text": "tests/rpc/test_eth_getUserOperationReceipt.py:26: in test_eth_getUserOperationReceipt_error\n    assert_rpc_error(response, \"Missing/invalid userOpHash\", -32601)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32602 == -32601\nE    +  where -32602 = Error(code=-32602, message='invalid length 0, expected a (both 0x-prefixed or not) hex string or byte array containing 32 bytes at line 1 column 2', data=None, id=162).code"
          }
        },
        "104": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.112",
          "failure": {
            "message": "AttributeError: 'Error' object has no attribute 'result'",
            "#text": "tests/rpc/test_eth_sendUserOperation.py:19: in test_eth_sendUserOperation\n    assert response.result == userop_hash(helper_contract, userop)\nE   AttributeError: 'Error' object has no attribute 'result'"
          }
        },
        "105": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.085"
        },
        "106": {
          "classname": "tests.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.015"
        }
      }
    }
  },
  "20230304/063228": {
    "stackup-bundler-launcher": {
      "name": "Stackup Bundler",
      "errors": "0",
      "failures": "1",
      "skipped": "1",
      "tests": "107",
      "time": "30.328",
      "timestamp": "2023-03-04T06:31:56.053635",
      "hostname": "fv-az487-601",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_bundle_replace_by_fee[]",
          "time": "0.115",
          "failure": {
            "message": "AttributeError: 'Error' object has no attribute 'result'",
            "#text": "tests/bundle/test_bundle.py:42: in test_bundle_replace_by_fee\n    assert higher_fee_op.send().result\nE   AttributeError: 'Error' object has no attribute 'result'"
          }
        },
        "2": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender[]",
          "time": "0.340"
        },
        "3": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender[]",
          "time": "0.420"
        },
        "4": {
          "classname": "tests.bundle.test_codehash",
          "name": "test_codehash_changed[]",
          "time": "0.495"
        },
        "5": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][no_storage][ok]",
          "time": "0.222"
        },
        "6": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][storage][drop]",
          "time": "0.217"
        },
        "7": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage][drop]",
          "time": "0.223"
        },
        "8": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.236"
        },
        "9": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_storage][ok]",
          "time": "0.229"
        },
        "10": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.231"
        },
        "11": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.238"
        },
        "12": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_init_code][drop]",
          "time": "0.418"
        },
        "13": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][context][drop]",
          "time": "0.220"
        },
        "14": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][external_storage][drop]",
          "time": "0.231"
        },
        "15": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][no_storage][ok]",
          "time": "0.251"
        },
        "16": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][storage][ok]",
          "time": "0.257"
        },
        "17": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage][ok]",
          "time": "0.258"
        },
        "18": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage_struct][ok]",
          "time": "0.262"
        },
        "19": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_storage][ok]",
          "time": "0.259"
        },
        "20": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage][ok]",
          "time": "0.263"
        },
        "21": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.270"
        },
        "22": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.459"
        },
        "23": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][context][ok]",
          "time": "0.259"
        },
        "24": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][external_storage][drop]",
          "time": "0.255"
        },
        "25": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][no_storage][ok]",
          "time": "0.278"
        },
        "26": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][storage][drop]",
          "time": "0.278"
        },
        "27": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage][drop]",
          "time": "0.285"
        },
        "28": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage_struct][drop]",
          "time": "0.298"
        },
        "29": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_storage][ok]",
          "time": "0.286"
        },
        "30": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage][drop]",
          "time": "0.287"
        },
        "31": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.297"
        },
        "32": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][external_storage][drop]",
          "time": "0.391"
        },
        "33": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][no_storage][ok]",
          "time": "0.316"
        },
        "34": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][storage][ok]",
          "time": "0.317"
        },
        "35": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage][ok]",
          "time": "0.325"
        },
        "36": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage_struct][ok]",
          "time": "0.334"
        },
        "37": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_storage][ok]",
          "time": "0.319"
        },
        "38": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage][ok]",
          "time": "0.319"
        },
        "39": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage_struct][ok]",
          "time": "0.330"
        },
        "40": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][external_storage][drop]",
          "time": "0.320"
        },
        "41": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][no_storage][ok]",
          "time": "0.153"
        },
        "42": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_storage][ok]",
          "time": "0.146"
        },
        "43": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage][ok]",
          "time": "0.161"
        },
        "44": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.165"
        },
        "45": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][external_storage][drop]",
          "time": "0.180"
        },
        "46": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][no_storage][ok]",
          "time": "0.182"
        },
        "47": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_storage][ok]",
          "time": "0.179"
        },
        "48": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage][ok]",
          "time": "0.192"
        },
        "49": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage_struct][ok]",
          "time": "0.192"
        },
        "50": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][external_storage][drop]",
          "time": "0.186"
        },
        "51": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.123"
        },
        "52": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.124"
        },
        "53": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.128"
        },
        "54": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.125"
        },
        "55": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.127"
        },
        "56": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.131"
        },
        "57": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.127"
        },
        "58": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.128"
        },
        "59": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.128"
        },
        "60": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.129"
        },
        "61": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.133"
        },
        "62": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.129"
        },
        "63": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.136"
        },
        "64": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.136"
        },
        "65": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.136"
        },
        "66": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.208"
        },
        "67": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.213"
        },
        "68": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.211"
        },
        "69": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.213"
        },
        "70": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.210"
        },
        "71": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.216"
        },
        "72": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.211"
        },
        "73": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.216"
        },
        "74": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.214"
        },
        "75": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.215"
        },
        "76": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.215"
        },
        "77": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.218"
        },
        "78": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.215"
        },
        "79": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.220"
        },
        "80": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.213"
        },
        "81": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.274"
        },
        "82": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.271"
        },
        "83": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.275"
        },
        "84": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.274"
        },
        "85": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.270"
        },
        "86": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.274"
        },
        "87": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.274"
        },
        "88": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.283"
        },
        "89": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.276"
        },
        "90": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.277"
        },
        "91": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.285"
        },
        "92": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.284"
        },
        "93": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.283"
        },
        "94": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.281"
        },
        "95": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.278"
        },
        "96": {
          "classname": "tests.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.009"
        },
        "97": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.055"
        },
        "98": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.050"
        },
        "99": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.048"
        },
        "100": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "0.148"
        },
        "101": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.006"
        },
        "102": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.162"
        },
        "103": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.006"
        },
        "104": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.133"
        },
        "105": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.093"
        },
        "106": {
          "classname": "tests.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.011"
        }
      }
    },
    "aabundler-launcher": {
      "name": "AA-Reference-Bundler/0.5.0",
      "errors": "0",
      "failures": "0",
      "skipped": "1",
      "tests": "107",
      "time": "33.802",
      "timestamp": "2023-03-04T06:31:10.045350",
      "hostname": "fv-az487-601",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_bundle_replace_by_fee[]",
          "time": "0.286"
        },
        "2": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender[]",
          "time": "0.556"
        },
        "3": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender[]",
          "time": "0.545"
        },
        "4": {
          "classname": "tests.bundle.test_codehash",
          "name": "test_codehash_changed[]",
          "time": "0.642"
        },
        "5": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][no_storage][ok]",
          "time": "0.221"
        },
        "6": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][storage][drop]",
          "time": "0.210"
        },
        "7": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage][drop]",
          "time": "0.214"
        },
        "8": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.227"
        },
        "9": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_storage][ok]",
          "time": "0.235"
        },
        "10": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.233"
        },
        "11": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.241"
        },
        "12": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_init_code][drop]",
          "time": "0.420"
        },
        "13": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][context][drop]",
          "time": "0.212"
        },
        "14": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][external_storage][drop]",
          "time": "0.218"
        },
        "15": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][no_storage][ok]",
          "time": "0.257"
        },
        "16": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][storage][ok]",
          "time": "0.254"
        },
        "17": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage][ok]",
          "time": "0.262"
        },
        "18": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage_struct][ok]",
          "time": "0.268"
        },
        "19": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_storage][ok]",
          "time": "0.264"
        },
        "20": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage][ok]",
          "time": "0.263"
        },
        "21": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.281"
        },
        "22": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.473"
        },
        "23": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][context][ok]",
          "time": "0.255"
        },
        "24": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][external_storage][drop]",
          "time": "0.257"
        },
        "25": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][no_storage][ok]",
          "time": "0.289"
        },
        "26": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][storage][drop]",
          "time": "0.276"
        },
        "27": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage][drop]",
          "time": "0.287"
        },
        "28": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage_struct][drop]",
          "time": "0.295"
        },
        "29": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_storage][ok]",
          "time": "0.297"
        },
        "30": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage][drop]",
          "time": "0.281"
        },
        "31": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.295"
        },
        "32": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][external_storage][drop]",
          "time": "0.291"
        },
        "33": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][no_storage][ok]",
          "time": "0.321"
        },
        "34": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][storage][ok]",
          "time": "0.323"
        },
        "35": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage][ok]",
          "time": "0.325"
        },
        "36": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage_struct][ok]",
          "time": "0.346"
        },
        "37": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_storage][ok]",
          "time": "0.326"
        },
        "38": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage][ok]",
          "time": "0.345"
        },
        "39": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage_struct][ok]",
          "time": "0.348"
        },
        "40": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][external_storage][drop]",
          "time": "0.317"
        },
        "41": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][no_storage][ok]",
          "time": "0.166"
        },
        "42": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_storage][ok]",
          "time": "0.150"
        },
        "43": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage][ok]",
          "time": "0.159"
        },
        "44": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.165"
        },
        "45": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][external_storage][drop]",
          "time": "0.175"
        },
        "46": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][no_storage][ok]",
          "time": "0.182"
        },
        "47": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_storage][ok]",
          "time": "0.184"
        },
        "48": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage][ok]",
          "time": "0.196"
        },
        "49": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage_struct][ok]",
          "time": "0.203"
        },
        "50": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][external_storage][drop]",
          "time": "0.175"
        },
        "51": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.128"
        },
        "52": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.129"
        },
        "53": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.125"
        },
        "54": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.129"
        },
        "55": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.125"
        },
        "56": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.130"
        },
        "57": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.134"
        },
        "58": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.131"
        },
        "59": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.128"
        },
        "60": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.132"
        },
        "61": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.132"
        },
        "62": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.131"
        },
        "63": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.139"
        },
        "64": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.138"
        },
        "65": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.135"
        },
        "66": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.212"
        },
        "67": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.211"
        },
        "68": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.210"
        },
        "69": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.214"
        },
        "70": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.210"
        },
        "71": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.213"
        },
        "72": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.212"
        },
        "73": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.216"
        },
        "74": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.213"
        },
        "75": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.218"
        },
        "76": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.216"
        },
        "77": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.215"
        },
        "78": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.221"
        },
        "79": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.220"
        },
        "80": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.213"
        },
        "81": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.278"
        },
        "82": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.278"
        },
        "83": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.271"
        },
        "84": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.277"
        },
        "85": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.276"
        },
        "86": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.283"
        },
        "87": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.275"
        },
        "88": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.283"
        },
        "89": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.281"
        },
        "90": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.280"
        },
        "91": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.284"
        },
        "92": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.277"
        },
        "93": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.289"
        },
        "94": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.283"
        },
        "95": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.280"
        },
        "96": {
          "classname": "tests.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.013"
        },
        "97": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.066"
        },
        "98": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.067"
        },
        "99": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.050"
        },
        "100": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "0.299"
        },
        "101": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.005"
        },
        "102": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.250"
        },
        "103": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.003"
        },
        "104": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.213"
        },
        "105": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.096"
        },
        "106": {
          "classname": "tests.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.011"
        }
      }
    },
    "aa-bundler-rust-launcher": {
      "name": "aa-bundler in Rust",
      "errors": "0",
      "failures": "91",
      "skipped": "1",
      "tests": "107",
      "time": "34.554",
      "timestamp": "2023-03-04T06:30:22.992571",
      "hostname": "fv-az487-601",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_bundle_replace_by_fee[]",
          "time": "0.095",
          "failure": {
            "message": "AttributeError: 'Error' object has no attribute 'result'",
            "#text": "tests/bundle/test_bundle.py:40: in test_bundle_replace_by_fee\n    assert lower_fee_op.send().result\nE   AttributeError: 'Error' object has no attribute 'result'"
          }
        },
        "2": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender[]",
          "time": "0.139",
          "failure": {
            "message": "AssertionError: assert [] == [UserOperatio...gnature='0x')]\n  Right contains one more item: UserOperation(sender='0xFe6FAF22E750d3916A7ca0f5C450158701C572d8', nonce='0x0', initCode='0x', callData='0xa9e966b7000...tionGas='0x493e0', maxFeePerGas='0x77359400', maxPriorityFeePerGas='0x3b9aca00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  +  ,\n  -  UserOperation(sender='0xFe6FAF22E750d3916A7ca0f5C450158701C572d8',\n  -                nonce='0x0',\n  -                initCode='0x',\n  -                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n  -                callGasLimit='0x493e0',\n  -                verificationGasLimit='0xf4240',\n  -                preVerificationGas='0x493e0',\n  -                maxFeePerGas='0x77359400',\n  -                maxPriorityFeePerGas='0x3b9aca00',\n  -                paymasterAndData='0x',\n  -                signature='0x'),\n    ]",
            "#text": "tests/bundle/test_bundle.py:60: in test_max_allowed_ops_unstaked_sender\n    assert dump_mempool() == wallet_ops[: i + 1]\nE   AssertionError: assert [] == [UserOperatio...gnature='0x')]\nE     Right contains one more item: UserOperation(sender='0xFe6FAF22E750d3916A7ca0f5C450158701C572d8', nonce='0x0', initCode='0x', callData='0xa9e966b7000...tionGas='0x493e0', maxFeePerGas='0x77359400', maxPriorityFeePerGas='0x3b9aca00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     +  ,\nE     -  UserOperation(sender='0xFe6FAF22E750d3916A7ca0f5C450158701C572d8',\nE     -                nonce='0x0',\nE     -                initCode='0x',\nE     -                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE     -                callGasLimit='0x493e0',\nE     -                verificationGasLimit='0xf4240',\nE     -                preVerificationGas='0x493e0',\nE     -                maxFeePerGas='0x77359400',\nE     -                maxPriorityFeePerGas='0x3b9aca00',\nE     -                paymasterAndData='0x',\nE     -                signature='0x'),\nE       ]"
          }
        },
        "3": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender[]",
          "time": "0.262",
          "failure": {
            "message": "AssertionError: assert [] == [UserOperatio...gnature='0x')]\n  Right contains one more item: UserOperation(sender='0x94960dbba0013AC4c50ADca3eAD4868Bf01dfA32', nonce='0x0', initCode='0x', callData='0xa9e966b7000...tionGas='0x493e0', maxFeePerGas='0x77359400', maxPriorityFeePerGas='0x3b9aca00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  +  ,\n  -  UserOperation(sender='0x94960dbba0013AC4c50ADca3eAD4868Bf01dfA32',\n  -                nonce='0x0',\n  -                initCode='0x',\n  -                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n  -                callGasLimit='0x493e0',\n  -                verificationGasLimit='0xf4240',\n  -                preVerificationGas='0x493e0',\n  -                maxFeePerGas='0x77359400',\n  -                maxPriorityFeePerGas='0x3b9aca00',\n  -                paymasterAndData='0x',\n  -                signature='0x'),\n    ]",
            "#text": "tests/bundle/test_bundle.py:86: in test_max_allowed_ops_staked_sender\n    assert dump_mempool() == wallet_ops[: i + 1]\nE   AssertionError: assert [] == [UserOperatio...gnature='0x')]\nE     Right contains one more item: UserOperation(sender='0x94960dbba0013AC4c50ADca3eAD4868Bf01dfA32', nonce='0x0', initCode='0x', callData='0xa9e966b7000...tionGas='0x493e0', maxFeePerGas='0x77359400', maxPriorityFeePerGas='0x3b9aca00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     +  ,\nE     -  UserOperation(sender='0x94960dbba0013AC4c50ADca3eAD4868Bf01dfA32',\nE     -                nonce='0x0',\nE     -                initCode='0x',\nE     -                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE     -                callGasLimit='0x493e0',\nE     -                verificationGasLimit='0xf4240',\nE     -                preVerificationGas='0x493e0',\nE     -                maxFeePerGas='0x77359400',\nE     -                maxPriorityFeePerGas='0x3b9aca00',\nE     -                paymasterAndData='0x',\nE     -                signature='0x'),\nE       ]"
          }
        },
        "4": {
          "classname": "tests.bundle.test_codehash",
          "name": "test_codehash_changed[]",
          "time": "0.092",
          "failure": {
            "message": "AttributeError: 'Error' object has no attribute 'result'",
            "#text": "tests/bundle/test_codehash.py:44: in test_codehash_changed\n    assert response.result, \"userop dropped by bundler\"\nE   AttributeError: 'Error' object has no attribute 'result'"
          }
        },
        "5": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][no_storage][ok]",
          "time": "0.165",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=15)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=15)"
          }
        },
        "6": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][storage][drop]",
          "time": "0.166",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=17).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=17).code"
          }
        },
        "7": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage][drop]",
          "time": "0.166",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=19).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=19).code"
          }
        },
        "8": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.165",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=21).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=21).code"
          }
        },
        "9": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_storage][ok]",
          "time": "0.166",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=23)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=23)"
          }
        },
        "10": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.164",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=25)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=25)"
          }
        },
        "11": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.164",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=27)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=27)"
          }
        },
        "12": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_init_code][drop]",
          "time": "0.415",
          "failure": {
            "message": "assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=29).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=29).code"
          }
        },
        "13": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][context][drop]",
          "time": "0.170",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=31).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=31).code"
          }
        },
        "14": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][external_storage][drop]",
          "time": "0.165",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=33).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=33).code"
          }
        },
        "15": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][no_storage][ok]",
          "time": "0.197",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=35)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=35)"
          }
        },
        "16": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][storage][ok]",
          "time": "0.198",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=37)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=37)"
          }
        },
        "17": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage][ok]",
          "time": "0.196",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=39)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=39)"
          }
        },
        "18": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage_struct][ok]",
          "time": "0.200",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=41)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=41)"
          }
        },
        "19": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_storage][ok]",
          "time": "0.199",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=43)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=43)"
          }
        },
        "20": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage][ok]",
          "time": "0.197",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=45)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=45)"
          }
        },
        "21": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.199",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=47)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=47)"
          }
        },
        "22": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.444",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=49)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=49)"
          }
        },
        "23": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][context][ok]",
          "time": "0.199",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=51)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=51)"
          }
        },
        "24": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][external_storage][drop]",
          "time": "0.199",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=53).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=53).code"
          }
        },
        "25": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][no_storage][ok]",
          "time": "0.257",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=55)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=55)"
          }
        },
        "26": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][storage][drop]",
          "time": "0.293",
          "failure": {
            "message": "assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=57).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=57).code"
          }
        },
        "27": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage][drop]",
          "time": "0.272",
          "failure": {
            "message": "assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=59).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=59).code"
          }
        },
        "28": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage_struct][drop]",
          "time": "0.284",
          "failure": {
            "message": "assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=61).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=61).code"
          }
        },
        "29": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_storage][ok]",
          "time": "0.271",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=63)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=63)"
          }
        },
        "30": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage][drop]",
          "time": "0.275",
          "failure": {
            "message": "assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=65).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=65).code"
          }
        },
        "31": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.279",
          "failure": {
            "message": "assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=67).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=67).code"
          }
        },
        "32": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][external_storage][drop]",
          "time": "0.275",
          "failure": {
            "message": "assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=69).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=69).code"
          }
        },
        "33": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][no_storage][ok]",
          "time": "0.293",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=71)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=71)"
          }
        },
        "34": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][storage][ok]",
          "time": "0.400",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=73)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=73)"
          }
        },
        "35": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage][ok]",
          "time": "0.302",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=75)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=75)"
          }
        },
        "36": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage_struct][ok]",
          "time": "0.311",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=77)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=77)"
          }
        },
        "37": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_storage][ok]",
          "time": "0.299",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=79)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=79)"
          }
        },
        "38": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage][ok]",
          "time": "0.308",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=81)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=81)"
          }
        },
        "39": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage_struct][ok]",
          "time": "0.311",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=83)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=83)"
          }
        },
        "40": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][external_storage][drop]",
          "time": "0.303",
          "failure": {
            "message": "assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=85).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   assert -32000 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32000 = Error(code=-32000, message='error parsing user operation hash: Invalid character \\'\"\\' at position 0', data=None, id=85).code"
          }
        },
        "41": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][no_storage][ok]",
          "time": "0.098",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=87)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=87)"
          }
        },
        "42": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_storage][ok]",
          "time": "0.098",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=89)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=89)"
          }
        },
        "43": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage][ok]",
          "time": "0.100",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=91)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=91)"
          }
        },
        "44": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.097",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=93)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=93)"
          }
        },
        "45": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][external_storage][drop]",
          "time": "0.098",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=95).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=95).code"
          }
        },
        "46": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][no_storage][ok]",
          "time": "0.135",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=97)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=97)"
          }
        },
        "47": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_storage][ok]",
          "time": "0.129",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=99)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=99)"
          }
        },
        "48": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage][ok]",
          "time": "0.129",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=101)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=101)"
          }
        },
        "49": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage_struct][ok]",
          "time": "0.130",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32603, message='Internal error', data=None, id=103)",
            "#text": "tests/bundle/test_storage_rules.py:18: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:20: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32603, message='Internal error', data=None, id=103)"
          }
        },
        "50": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][external_storage][drop]",
          "time": "0.130",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=105).code",
            "#text": "tests/bundle/test_storage_rules.py:311: in test_rule\n    case.assert_func(response)\ntests/bundle/test_storage_rules.py:24: in assert_error\n    assert_rpc_error(response, response.message, RPCErrorCode.BANNED_OPCODE)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=105).code"
          }
        },
        "51": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.094",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=106).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=106).code"
          }
        },
        "52": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.097",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=107).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=107).code"
          }
        },
        "53": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.093",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=108).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=108).code"
          }
        },
        "54": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.093",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=109).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=109).code"
          }
        },
        "55": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.093",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=110).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=110).code"
          }
        },
        "56": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.093",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=111).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=111).code"
          }
        },
        "57": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.120",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=112).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=112).code"
          }
        },
        "58": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.093",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=113).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=113).code"
          }
        },
        "59": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.093",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=114).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=114).code"
          }
        },
        "60": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.093",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=115).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=115).code"
          }
        },
        "61": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.096",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=116).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=116).code"
          }
        },
        "62": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.091",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=117).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=117).code"
          }
        },
        "63": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.095",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=118).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=118).code"
          }
        },
        "64": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.093",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=119).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=119).code"
          }
        },
        "65": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.092",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=120).code",
            "#text": "tests/opbanning/test_op_banning.py:41: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=120).code"
          }
        },
        "66": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.160",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=121).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=121).code"
          }
        },
        "67": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.161",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=122).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=122).code"
          }
        },
        "68": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.161",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=123).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=123).code"
          }
        },
        "69": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.167",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=124).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=124).code"
          }
        },
        "70": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.166",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=125).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=125).code"
          }
        },
        "71": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.161",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=126).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=126).code"
          }
        },
        "72": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.161",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=127).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=127).code"
          }
        },
        "73": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.161",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=128).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=128).code"
          }
        },
        "74": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.165",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=129).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=129).code"
          }
        },
        "75": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.163",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=130).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=130).code"
          }
        },
        "76": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.162",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=131).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=131).code"
          }
        },
        "77": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.264",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=132).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=132).code"
          }
        },
        "78": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.161",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=133).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=133).code"
          }
        },
        "79": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.160",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=134).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=134).code"
          }
        },
        "80": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.162",
          "failure": {
            "message": "AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=135).code",
            "#text": "tests/opbanning/test_op_banning.py:52: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32603 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32603 = Error(code=-32603, message='Internal error', data=None, id=135).code"
          }
        },
        "81": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.265"
        },
        "82": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.262",
          "failure": {
            "message": "AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32500 = Error(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=137).code",
            "#text": "tests/opbanning/test_op_banning.py:69: in test_factory_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32500 = Error(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=137).code"
          }
        },
        "83": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.266"
        },
        "84": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.263"
        },
        "85": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.268"
        },
        "86": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.269"
        },
        "87": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.293"
        },
        "88": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.272"
        },
        "89": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.267"
        },
        "90": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.270",
          "failure": {
            "message": "AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32500 = Error(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=145).code",
            "#text": "tests/opbanning/test_op_banning.py:69: in test_factory_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32500 = Error(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=145).code"
          }
        },
        "91": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.269"
        },
        "92": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.266"
        },
        "93": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.272"
        },
        "94": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.273",
          "failure": {
            "message": "AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32500 = Error(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=149).code",
            "#text": "tests/opbanning/test_op_banning.py:69: in test_factory_banned_opcode\n    assert_rpc_error(\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32500 = Error(code=-32500, message='failed to parse geth trace: Odd number of digits', data=None, id=149).code"
          }
        },
        "95": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.262"
        },
        "96": {
          "classname": "tests.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.011"
        },
        "97": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.058",
          "failure": {
            "message": "jsonschema.exceptions.ValidationError: 'verificationGas' is a required property\n\nFailed validating 'required' in schema:\n    {'properties': {'callGasLimit': {'oneOf': [{'pattern': '^0x([1-9a-f]+[0-9a-f]*|0)$',\n                                                'type': 'string'},\n                                               {'type': 'number'}],\n                                     'title': 'callGasLimit'},\n                    'preVerificationGas': {'oneOf': [{'pattern': '^0x([1-9a-f]+[0-9a-f]*|0)$',\n                                                      'type': 'string'},\n                                                     {'type': 'number'}],\n                                           'title': 'preVerificationGas'},\n                    'verificationGas': {'oneOf': [{'pattern': '^0x([1-9a-f]+[0-9a-f]*|0)$',\n                                                   'type': 'string'},\n                                                  {'type': 'number'}],\n                                        'title': 'verificationGas'}},\n     'required': ['callGasLimit', 'preVerificationGas', 'verificationGas'],\n     'title': 'UserOperation Gas parameters',\n     'type': 'object'}\n\nOn instance:\n    {'callGasLimit': '0xab10',\n     'preVerificationGas': '0xae00',\n     'verificationGasLimit': '0x4c8a1'}",
            "#text": "tests/rpc/test_eth_estimateUserOperationGas.py:20: in test_eth_estimateUserOperationGas\n    validate(instance=response.result, schema=schema)\n.venv/lib/python3.10/site-packages/jsonschema/validators.py:1121: in validate\n    raise error\nE   jsonschema.exceptions.ValidationError: 'verificationGas' is a required property\nE   \nE   Failed validating 'required' in schema:\nE       {'properties': {'callGasLimit': {'oneOf': [{'pattern': '^0x([1-9a-f]+[0-9a-f]*|0)$',\nE                                                   'type': 'string'},\nE                                                  {'type': 'number'}],\nE                                        'title': 'callGasLimit'},\nE                       'preVerificationGas': {'oneOf': [{'pattern': '^0x([1-9a-f]+[0-9a-f]*|0)$',\nE                                                         'type': 'string'},\nE                                                        {'type': 'number'}],\nE                                              'title': 'preVerificationGas'},\nE                       'verificationGas': {'oneOf': [{'pattern': '^0x([1-9a-f]+[0-9a-f]*|0)$',\nE                                                      'type': 'string'},\nE                                                     {'type': 'number'}],\nE                                           'title': 'verificationGas'}},\nE        'required': ['callGasLimit', 'preVerificationGas', 'verificationGas'],\nE        'title': 'UserOperation Gas parameters',\nE        'type': 'object'}\nE   \nE   On instance:\nE       {'callGasLimit': '0xab10',\nE        'preVerificationGas': '0xae00',\nE        'verificationGasLimit': '0x4c8a1'}"
          }
        },
        "98": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.054",
          "failure": {
            "message": "AssertionError: assert -32000 == <RPCErrorCode.EXECUTION_REVERTED: -32521>\n +  where -32000 = Error(code=-32000, message='GRPC error (uopool): error estimating user operation gas', data=None, id=153).code",
            "#text": "tests/rpc/test_eth_estimateUserOperationGas.py:29: in test_eth_estimateUserOperationGas_execution_revert\n    assert_rpc_error(response, \"test fail\", RPCErrorCode.EXECUTION_REVERTED)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32000 == <RPCErrorCode.EXECUTION_REVERTED: -32521>\nE    +  where -32000 = Error(code=-32000, message='GRPC error (uopool): error estimating user operation gas', data=None, id=153).code"
          }
        },
        "99": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.051",
          "failure": {
            "message": "AssertionError: assert -32000 == <RPCErrorCode.REJECTED_BY_EP_OR_ACCOUNT: -32500>\n +  where -32000 = Error(code=-32000, message='GRPC error (uopool): error estimating user operation gas', data=None, id=154).code",
            "#text": "tests/rpc/test_eth_estimateUserOperationGas.py:37: in test_eth_estimateUserOperationGas_simulation_revert\n    assert_rpc_error(response, \"dead signature\", RPCErrorCode.REJECTED_BY_EP_OR_ACCOUNT)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32000 == <RPCErrorCode.REJECTED_BY_EP_OR_ACCOUNT: -32500>\nE    +  where -32000 = Error(code=-32000, message='GRPC error (uopool): error estimating user operation gas', data=None, id=154).code"
          }
        },
        "100": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "0.098",
          "failure": {
            "message": "AttributeError: 'Error' object has no attribute 'result'",
            "#text": "tests/rpc/test_eth_getUserOperationByHash.py:16: in test_eth_getUserOperationByHash\n    ) == userop_hash(helper_contract, userop), \"user operation mismatch\"\nE   AttributeError: 'Error' object has no attribute 'result'"
          }
        },
        "101": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.003",
          "failure": {
            "message": "AssertionError: assert 'Missing/invalid userOpHash' in 'Method not found'\n +  where 'Method not found' = Error(code=-32601, message='Method not found', data=None, id=158).message",
            "#text": "tests/rpc/test_eth_getUserOperationByHash.py:28: in test_eth_getUserOperationByHash_error\n    assert_rpc_error(response, \"Missing/invalid userOpHash\", -32601)\ntests/utils.py:101: in assert_rpc_error\n    assert message in response.message\nE   AssertionError: assert 'Missing/invalid userOpHash' in 'Method not found'\nE    +  where 'Method not found' = Error(code=-32601, message='Method not found', data=None, id=158).message"
          }
        },
        "102": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.092",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/rpc/test_eth_getUserOperationReceipt.py:15: in test_eth_getUserOperationReceipt\n    assert response.result[\"userOpHash\"] == userop_hash(helper_contract, userop)\nE   TypeError: 'NoneType' object is not subscriptable"
          }
        },
        "103": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.003",
          "failure": {
            "message": "AssertionError: assert -32602 == -32601\n +  where -32602 = Error(code=-32602, message='invalid length 0, expected a (both 0x-prefixed or not) hex string or byte array containing 32 bytes at line 1 column 2', data=None, id=162).code",
            "#text": "tests/rpc/test_eth_getUserOperationReceipt.py:26: in test_eth_getUserOperationReceipt_error\n    assert_rpc_error(response, \"Missing/invalid userOpHash\", -32601)\ntests/utils.py:100: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32602 == -32601\nE    +  where -32602 = Error(code=-32602, message='invalid length 0, expected a (both 0x-prefixed or not) hex string or byte array containing 32 bytes at line 1 column 2', data=None, id=162).code"
          }
        },
        "104": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.093",
          "failure": {
            "message": "AttributeError: 'Error' object has no attribute 'result'",
            "#text": "tests/rpc/test_eth_sendUserOperation.py:19: in test_eth_sendUserOperation\n    assert response.result == userop_hash(helper_contract, userop)\nE   AttributeError: 'Error' object has no attribute 'result'"
          }
        },
        "105": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.069"
        },
        "106": {
          "classname": "tests.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.013"
        }
      }
    }
  },
  "20230226/122355": {
    "stackup-bundler-launcher": {
      "name": "Stackup Bundler",
      "errors": "0",
      "failures": "1",
      "skipped": "1",
      "tests": "107",
      "time": "31.031",
      "timestamp": "2023-02-26T12:23:22.982101",
      "hostname": "fv-az402-661",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_bundle_replace_by_fee[]",
          "time": "0.125",
          "failure": {
            "message": "AttributeError: 'Error' object has no attribute 'result'",
            "#text": "tests/bundle/test_bundle.py:42: in test_bundle_replace_by_fee\n    assert higher_fee_op.send().result\nE   AttributeError: 'Error' object has no attribute 'result'"
          }
        },
        "2": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender[]",
          "time": "0.349"
        },
        "3": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender[]",
          "time": "0.436"
        },
        "4": {
          "classname": "tests.bundle.test_codehash",
          "name": "test_codehash_changed[]",
          "time": "0.512"
        },
        "5": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][no_storage][ok]",
          "time": "0.232"
        },
        "6": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][storage][drop]",
          "time": "0.234"
        },
        "7": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage][drop]",
          "time": "0.237"
        },
        "8": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.240"
        },
        "9": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_storage][ok]",
          "time": "0.245"
        },
        "10": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.246"
        },
        "11": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.251"
        },
        "12": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_init_code][drop]",
          "time": "0.441"
        },
        "13": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][context][drop]",
          "time": "0.235"
        },
        "14": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][external_storage][drop]",
          "time": "0.237"
        },
        "15": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][no_storage][ok]",
          "time": "0.272"
        },
        "16": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][storage][ok]",
          "time": "0.264"
        },
        "17": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage][ok]",
          "time": "0.271"
        },
        "18": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage_struct][ok]",
          "time": "0.283"
        },
        "19": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_storage][ok]",
          "time": "0.266"
        },
        "20": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage][ok]",
          "time": "0.277"
        },
        "21": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.290"
        },
        "22": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.481"
        },
        "23": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][context][ok]",
          "time": "0.269"
        },
        "24": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][external_storage][drop]",
          "time": "0.270"
        },
        "25": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][no_storage][ok]",
          "time": "0.295"
        },
        "26": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][storage][drop]",
          "time": "0.292"
        },
        "27": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage][drop]",
          "time": "0.298"
        },
        "28": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage_struct][drop]",
          "time": "0.311"
        },
        "29": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_storage][ok]",
          "time": "0.307"
        },
        "30": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage][drop]",
          "time": "0.304"
        },
        "31": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.309"
        },
        "32": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][external_storage][drop]",
          "time": "0.410"
        },
        "33": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][no_storage][ok]",
          "time": "0.330"
        },
        "34": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][storage][ok]",
          "time": "0.333"
        },
        "35": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage][ok]",
          "time": "0.338"
        },
        "36": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage_struct][ok]",
          "time": "0.355"
        },
        "37": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_storage][ok]",
          "time": "0.339"
        },
        "38": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage][ok]",
          "time": "0.340"
        },
        "39": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage_struct][ok]",
          "time": "0.349"
        },
        "40": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][external_storage][drop]",
          "time": "0.340"
        },
        "41": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][no_storage][ok]",
          "time": "0.162"
        },
        "42": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_storage][ok]",
          "time": "0.155"
        },
        "43": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage][ok]",
          "time": "0.164"
        },
        "44": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.179"
        },
        "45": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][external_storage][drop]",
          "time": "0.209"
        },
        "46": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][no_storage][ok]",
          "time": "0.190"
        },
        "47": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_storage][ok]",
          "time": "0.189"
        },
        "48": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage][ok]",
          "time": "0.212"
        },
        "49": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage_struct][ok]",
          "time": "0.210"
        },
        "50": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][external_storage][drop]",
          "time": "0.195"
        },
        "51": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.135"
        },
        "52": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.132"
        },
        "53": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.129"
        },
        "54": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.133"
        },
        "55": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.131"
        },
        "56": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.135"
        },
        "57": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.137"
        },
        "58": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.133"
        },
        "59": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.136"
        },
        "60": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.134"
        },
        "61": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.134"
        },
        "62": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.138"
        },
        "63": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.138"
        },
        "64": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.146"
        },
        "65": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.138"
        },
        "66": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.213"
        },
        "67": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.318"
        },
        "68": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.223"
        },
        "69": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.217"
        },
        "70": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.229"
        },
        "71": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.221"
        },
        "72": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.222"
        },
        "73": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.217"
        },
        "74": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.230"
        },
        "75": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.220"
        },
        "76": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.221"
        },
        "77": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.222"
        },
        "78": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.225"
        },
        "79": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.230"
        },
        "80": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.215"
        },
        "81": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.286"
        },
        "82": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.293"
        },
        "83": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.281"
        },
        "84": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.282"
        },
        "85": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.286"
        },
        "86": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.285"
        },
        "87": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.284"
        },
        "88": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.290"
        },
        "89": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.285"
        },
        "90": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.291"
        },
        "91": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.296"
        },
        "92": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.290"
        },
        "93": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.287"
        },
        "94": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.285"
        },
        "95": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.282"
        },
        "96": {
          "classname": "tests.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.010"
        },
        "97": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.060"
        },
        "98": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.054"
        },
        "99": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.050"
        },
        "100": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "0.154"
        },
        "101": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.006"
        },
        "102": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.168"
        },
        "103": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.007"
        },
        "104": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.135"
        },
        "105": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.093"
        },
        "106": {
          "classname": "tests.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.011"
        }
      }
    },
    "aabundler-launcher": {
      "name": "AA-Reference-Bundler/0.5.0",
      "errors": "0",
      "failures": "0",
      "skipped": "1",
      "tests": "107",
      "time": "38.834",
      "timestamp": "2023-02-26T12:22:31.724746",
      "hostname": "fv-az402-661",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_bundle_replace_by_fee[]",
          "time": "0.291"
        },
        "2": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender[]",
          "time": "0.570"
        },
        "3": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender[]",
          "time": "0.572"
        },
        "4": {
          "classname": "tests.bundle.test_codehash",
          "name": "test_codehash_changed[]",
          "time": "0.684"
        },
        "5": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][no_storage][ok]",
          "time": "0.235"
        },
        "6": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][storage][drop]",
          "time": "0.222"
        },
        "7": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage][drop]",
          "time": "0.228"
        },
        "8": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.232"
        },
        "9": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_storage][ok]",
          "time": "0.240"
        },
        "10": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.244"
        },
        "11": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.249"
        },
        "12": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_init_code][drop]",
          "time": "0.436"
        },
        "13": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][context][drop]",
          "time": "0.219"
        },
        "14": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][external_storage][drop]",
          "time": "0.226"
        },
        "15": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][no_storage][ok]",
          "time": "0.265"
        },
        "16": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][storage][ok]",
          "time": "0.263"
        },
        "17": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage][ok]",
          "time": "0.272"
        },
        "18": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage_struct][ok]",
          "time": "0.282"
        },
        "19": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_storage][ok]",
          "time": "0.269"
        },
        "20": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage][ok]",
          "time": "0.283"
        },
        "21": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.291"
        },
        "22": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.495"
        },
        "23": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][context][ok]",
          "time": "0.280"
        },
        "24": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][external_storage][drop]",
          "time": "0.258"
        },
        "25": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][no_storage][ok]",
          "time": "0.299"
        },
        "26": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][storage][drop]",
          "time": "0.288"
        },
        "27": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage][drop]",
          "time": "0.299"
        },
        "28": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage_struct][drop]",
          "time": "0.309"
        },
        "29": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_storage][ok]",
          "time": "0.311"
        },
        "30": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage][drop]",
          "time": "0.297"
        },
        "31": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.418"
        },
        "32": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][external_storage][drop]",
          "time": "0.294"
        },
        "33": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][no_storage][ok]",
          "time": "0.331"
        },
        "34": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][storage][ok]",
          "time": "0.340"
        },
        "35": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage][ok]",
          "time": "0.341"
        },
        "36": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage_struct][ok]",
          "time": "0.355"
        },
        "37": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_storage][ok]",
          "time": "0.337"
        },
        "38": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage][ok]",
          "time": "0.359"
        },
        "39": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage_struct][ok]",
          "time": "0.357"
        },
        "40": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][external_storage][drop]",
          "time": "0.323"
        },
        "41": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][no_storage][ok]",
          "time": "0.170"
        },
        "42": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_storage][ok]",
          "time": "0.159"
        },
        "43": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage][ok]",
          "time": "0.169"
        },
        "44": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.171"
        },
        "45": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][external_storage][drop]",
          "time": "0.201"
        },
        "46": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][no_storage][ok]",
          "time": "0.184"
        },
        "47": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_storage][ok]",
          "time": "0.192"
        },
        "48": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage][ok]",
          "time": "0.208"
        },
        "49": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage_struct][ok]",
          "time": "0.208"
        },
        "50": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][external_storage][drop]",
          "time": "0.186"
        },
        "51": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.127"
        },
        "52": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.132"
        },
        "53": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.137"
        },
        "54": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.139"
        },
        "55": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.132"
        },
        "56": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.134"
        },
        "57": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.139"
        },
        "58": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.131"
        },
        "59": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.133"
        },
        "60": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.138"
        },
        "61": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.137"
        },
        "62": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.141"
        },
        "63": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.140"
        },
        "64": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.148"
        },
        "65": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.143"
        },
        "66": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.218"
        },
        "67": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.222"
        },
        "68": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.219"
        },
        "69": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.216"
        },
        "70": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.220"
        },
        "71": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.218"
        },
        "72": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.226"
        },
        "73": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.218"
        },
        "74": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.224"
        },
        "75": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.218"
        },
        "76": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.225"
        },
        "77": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.220"
        },
        "78": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.226"
        },
        "79": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.227"
        },
        "80": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.218"
        },
        "81": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.290"
        },
        "82": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.289"
        },
        "83": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.282"
        },
        "84": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.289"
        },
        "85": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.292"
        },
        "86": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.284"
        },
        "87": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.289"
        },
        "88": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.293"
        },
        "89": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.294"
        },
        "90": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.291"
        },
        "91": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.291"
        },
        "92": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.296"
        },
        "93": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.295"
        },
        "94": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.293"
        },
        "95": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.288"
        },
        "96": {
          "classname": "tests.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.014"
        },
        "97": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.072"
        },
        "98": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.069"
        },
        "99": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.055"
        },
        "100": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "0.310"
        },
        "101": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.005"
        },
        "102": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.259"
        },
        "103": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.004"
        },
        "104": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.213"
        },
        "105": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.106"
        },
        "106": {
          "classname": "tests.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.012"
        }
      }
    }
  },
  "20230226/103803": {
    "stackup-bundler-launcher": {
      "name": "Stackup Bundler",
      "errors": "0",
      "failures": "1",
      "skipped": "1",
      "tests": "107",
      "time": "29.306",
      "timestamp": "2023-02-26T10:37:32.383024",
      "hostname": "fv-az218-349",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_bundle_replace_by_fee[]",
          "time": "0.115",
          "failure": {
            "message": "AttributeError: 'Error' object has no attribute 'result'",
            "#text": "tests/bundle/test_bundle.py:42: in test_bundle_replace_by_fee\n    assert higher_fee_op.send().result\nE   AttributeError: 'Error' object has no attribute 'result'"
          }
        },
        "2": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender[]",
          "time": "0.335"
        },
        "3": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender[]",
          "time": "0.406"
        },
        "4": {
          "classname": "tests.bundle.test_codehash",
          "name": "test_codehash_changed[]",
          "time": "0.482"
        },
        "5": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][no_storage][ok]",
          "time": "0.218"
        },
        "6": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][storage][drop]",
          "time": "0.214"
        },
        "7": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage][drop]",
          "time": "0.217"
        },
        "8": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.226"
        },
        "9": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_storage][ok]",
          "time": "0.221"
        },
        "10": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.228"
        },
        "11": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.232"
        },
        "12": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_init_code][drop]",
          "time": "0.407"
        },
        "13": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][context][drop]",
          "time": "0.216"
        },
        "14": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][external_storage][drop]",
          "time": "0.221"
        },
        "15": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][no_storage][ok]",
          "time": "0.250"
        },
        "16": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][storage][ok]",
          "time": "0.245"
        },
        "17": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage][ok]",
          "time": "0.255"
        },
        "18": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage_struct][ok]",
          "time": "0.260"
        },
        "19": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_storage][ok]",
          "time": "0.254"
        },
        "20": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage][ok]",
          "time": "0.260"
        },
        "21": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.262"
        },
        "22": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.553"
        },
        "23": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][context][ok]",
          "time": "0.249"
        },
        "24": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][external_storage][drop]",
          "time": "0.256"
        },
        "25": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][no_storage][ok]",
          "time": "0.276"
        },
        "26": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][storage][drop]",
          "time": "0.277"
        },
        "27": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage][drop]",
          "time": "0.280"
        },
        "28": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage_struct][drop]",
          "time": "0.288"
        },
        "29": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_storage][ok]",
          "time": "0.282"
        },
        "30": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage][drop]",
          "time": "0.278"
        },
        "31": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.288"
        },
        "32": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][external_storage][drop]",
          "time": "0.286"
        },
        "33": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][no_storage][ok]",
          "time": "0.305"
        },
        "34": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][storage][ok]",
          "time": "0.309"
        },
        "35": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage][ok]",
          "time": "0.318"
        },
        "36": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage_struct][ok]",
          "time": "0.329"
        },
        "37": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_storage][ok]",
          "time": "0.314"
        },
        "38": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage][ok]",
          "time": "0.319"
        },
        "39": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage_struct][ok]",
          "time": "0.324"
        },
        "40": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][external_storage][drop]",
          "time": "0.312"
        },
        "41": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][no_storage][ok]",
          "time": "0.144"
        },
        "42": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_storage][ok]",
          "time": "0.147"
        },
        "43": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage][ok]",
          "time": "0.151"
        },
        "44": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.160"
        },
        "45": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][external_storage][drop]",
          "time": "0.176"
        },
        "46": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][no_storage][ok]",
          "time": "0.180"
        },
        "47": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_storage][ok]",
          "time": "0.175"
        },
        "48": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage][ok]",
          "time": "0.292"
        },
        "49": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage_struct][ok]",
          "time": "0.188"
        },
        "50": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][external_storage][drop]",
          "time": "0.183"
        },
        "51": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.122"
        },
        "52": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.122"
        },
        "53": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.127"
        },
        "54": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.122"
        },
        "55": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.124"
        },
        "56": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.124"
        },
        "57": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.124"
        },
        "58": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.127"
        },
        "59": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.123"
        },
        "60": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.131"
        },
        "61": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.125"
        },
        "62": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.131"
        },
        "63": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.130"
        },
        "64": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.135"
        },
        "65": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.131"
        },
        "66": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.205"
        },
        "67": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.203"
        },
        "68": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.207"
        },
        "69": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.209"
        },
        "70": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.207"
        },
        "71": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.209"
        },
        "72": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.207"
        },
        "73": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.213"
        },
        "74": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.212"
        },
        "75": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.207"
        },
        "76": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.211"
        },
        "77": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.209"
        },
        "78": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.214"
        },
        "79": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.210"
        },
        "80": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.206"
        },
        "81": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.270"
        },
        "82": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.269"
        },
        "83": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.263"
        },
        "84": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.268"
        },
        "85": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.270"
        },
        "86": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.268"
        },
        "87": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.272"
        },
        "88": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.270"
        },
        "89": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.267"
        },
        "90": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.272"
        },
        "91": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.291"
        },
        "92": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.271"
        },
        "93": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.270"
        },
        "94": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.279"
        },
        "95": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.269"
        },
        "96": {
          "classname": "tests.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.009"
        },
        "97": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.054"
        },
        "98": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.048"
        },
        "99": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.046"
        },
        "100": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "0.145"
        },
        "101": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.006"
        },
        "102": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.158"
        },
        "103": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.006"
        },
        "104": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.128"
        },
        "105": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.089"
        },
        "106": {
          "classname": "tests.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.011"
        }
      }
    },
    "aabundler-launcher": {
      "name": "AA-Reference-Bundler/0.5.0",
      "errors": "0",
      "failures": "0",
      "skipped": "1",
      "tests": "107",
      "time": "37.471",
      "timestamp": "2023-02-26T10:36:42.692665",
      "hostname": "fv-az218-349",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_bundle_replace_by_fee[]",
          "time": "0.279"
        },
        "2": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender[]",
          "time": "0.548"
        },
        "3": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender[]",
          "time": "0.543"
        },
        "4": {
          "classname": "tests.bundle.test_codehash",
          "name": "test_codehash_changed[]",
          "time": "0.625"
        },
        "5": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][no_storage][ok]",
          "time": "0.224"
        },
        "6": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][storage][drop]",
          "time": "0.203"
        },
        "7": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage][drop]",
          "time": "0.211"
        },
        "8": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.227"
        },
        "9": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_storage][ok]",
          "time": "0.226"
        },
        "10": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.224"
        },
        "11": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.239"
        },
        "12": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_init_code][drop]",
          "time": "0.433"
        },
        "13": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][context][drop]",
          "time": "0.212"
        },
        "14": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][external_storage][drop]",
          "time": "0.217"
        },
        "15": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][no_storage][ok]",
          "time": "0.251"
        },
        "16": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][storage][ok]",
          "time": "0.250"
        },
        "17": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage][ok]",
          "time": "0.254"
        },
        "18": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage_struct][ok]",
          "time": "0.270"
        },
        "19": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_storage][ok]",
          "time": "0.259"
        },
        "20": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage][ok]",
          "time": "0.261"
        },
        "21": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.269"
        },
        "22": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.466"
        },
        "23": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][context][ok]",
          "time": "0.255"
        },
        "24": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][external_storage][drop]",
          "time": "0.246"
        },
        "25": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][no_storage][ok]",
          "time": "0.282"
        },
        "26": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][storage][drop]",
          "time": "0.272"
        },
        "27": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage][drop]",
          "time": "0.278"
        },
        "28": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage_struct][drop]",
          "time": "0.293"
        },
        "29": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_storage][ok]",
          "time": "0.291"
        },
        "30": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage][drop]",
          "time": "0.278"
        },
        "31": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.289"
        },
        "32": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][external_storage][drop]",
          "time": "0.390"
        },
        "33": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][no_storage][ok]",
          "time": "0.316"
        },
        "34": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][storage][ok]",
          "time": "0.317"
        },
        "35": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage][ok]",
          "time": "0.332"
        },
        "36": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage_struct][ok]",
          "time": "0.337"
        },
        "37": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_storage][ok]",
          "time": "0.322"
        },
        "38": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage][ok]",
          "time": "0.340"
        },
        "39": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage_struct][ok]",
          "time": "0.343"
        },
        "40": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][external_storage][drop]",
          "time": "0.310"
        },
        "41": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][no_storage][ok]",
          "time": "0.161"
        },
        "42": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_storage][ok]",
          "time": "0.148"
        },
        "43": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage][ok]",
          "time": "0.157"
        },
        "44": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.164"
        },
        "45": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][external_storage][drop]",
          "time": "0.173"
        },
        "46": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][no_storage][ok]",
          "time": "0.178"
        },
        "47": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_storage][ok]",
          "time": "0.181"
        },
        "48": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage][ok]",
          "time": "0.191"
        },
        "49": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage_struct][ok]",
          "time": "0.199"
        },
        "50": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][external_storage][drop]",
          "time": "0.176"
        },
        "51": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.125"
        },
        "52": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.125"
        },
        "53": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.127"
        },
        "54": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.122"
        },
        "55": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.126"
        },
        "56": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.125"
        },
        "57": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.126"
        },
        "58": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.130"
        },
        "59": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.125"
        },
        "60": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.128"
        },
        "61": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.133"
        },
        "62": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.128"
        },
        "63": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.136"
        },
        "64": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.135"
        },
        "65": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.137"
        },
        "66": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.204"
        },
        "67": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.208"
        },
        "68": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.205"
        },
        "69": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.210"
        },
        "70": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.207"
        },
        "71": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.210"
        },
        "72": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.206"
        },
        "73": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.210"
        },
        "74": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.207"
        },
        "75": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.211"
        },
        "76": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.212"
        },
        "77": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.214"
        },
        "78": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.216"
        },
        "79": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.214"
        },
        "80": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.214"
        },
        "81": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.271"
        },
        "82": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.273"
        },
        "83": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.268"
        },
        "84": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.276"
        },
        "85": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.278"
        },
        "86": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.278"
        },
        "87": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.270"
        },
        "88": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.282"
        },
        "89": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.278"
        },
        "90": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.278"
        },
        "91": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.275"
        },
        "92": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.281"
        },
        "93": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.283"
        },
        "94": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.282"
        },
        "95": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.273"
        },
        "96": {
          "classname": "tests.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.012"
        },
        "97": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.066"
        },
        "98": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.058"
        },
        "99": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.057"
        },
        "100": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "0.295"
        },
        "101": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.003"
        },
        "102": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.250"
        },
        "103": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.003"
        },
        "104": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.204"
        },
        "105": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.098"
        },
        "106": {
          "classname": "tests.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.011"
        }
      }
    }
  },
  "20230225/185451": {
    "aabundler-launcher": {
      "name": "AA-Reference-Bundler/0.5.0",
      "errors": "0",
      "failures": "0",
      "skipped": "1",
      "tests": "107",
      "time": "36.942",
      "timestamp": "2023-02-25T18:54:02.670061",
      "hostname": "fv-az545-556",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_bundle_replace_by_fee[]",
          "time": "0.287"
        },
        "2": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender[]",
          "time": "0.540"
        },
        "3": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender[]",
          "time": "0.545"
        },
        "4": {
          "classname": "tests.bundle.test_codehash",
          "name": "test_codehash_changed[]",
          "time": "0.645"
        },
        "5": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][no_storage][ok]",
          "time": "0.224"
        },
        "6": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][storage][drop]",
          "time": "0.209"
        },
        "7": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage][drop]",
          "time": "0.216"
        },
        "8": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.228"
        },
        "9": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_storage][ok]",
          "time": "0.229"
        },
        "10": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.237"
        },
        "11": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.245"
        },
        "12": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_init_code][drop]",
          "time": "0.415"
        },
        "13": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][context][drop]",
          "time": "0.315"
        },
        "14": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][external_storage][drop]",
          "time": "0.217"
        },
        "15": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][no_storage][ok]",
          "time": "0.253"
        },
        "16": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][storage][ok]",
          "time": "0.254"
        },
        "17": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage][ok]",
          "time": "0.262"
        },
        "18": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage_struct][ok]",
          "time": "0.272"
        },
        "19": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_storage][ok]",
          "time": "0.259"
        },
        "20": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage][ok]",
          "time": "0.265"
        },
        "21": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.276"
        },
        "22": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.470"
        },
        "23": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][context][ok]",
          "time": "0.260"
        },
        "24": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][external_storage][drop]",
          "time": "0.255"
        },
        "25": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][no_storage][ok]",
          "time": "0.286"
        },
        "26": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][storage][drop]",
          "time": "0.285"
        },
        "27": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage][drop]",
          "time": "0.285"
        },
        "28": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage_struct][drop]",
          "time": "0.294"
        },
        "29": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_storage][ok]",
          "time": "0.299"
        },
        "30": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage][drop]",
          "time": "0.283"
        },
        "31": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.293"
        },
        "32": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][external_storage][drop]",
          "time": "0.392"
        },
        "33": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][no_storage][ok]",
          "time": "0.318"
        },
        "34": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][storage][ok]",
          "time": "0.325"
        },
        "35": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage][ok]",
          "time": "0.328"
        },
        "36": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage_struct][ok]",
          "time": "0.346"
        },
        "37": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_storage][ok]",
          "time": "0.333"
        },
        "38": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage][ok]",
          "time": "0.348"
        },
        "39": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage_struct][ok]",
          "time": "0.350"
        },
        "40": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][external_storage][drop]",
          "time": "0.315"
        },
        "41": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][no_storage][ok]",
          "time": "0.162"
        },
        "42": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_storage][ok]",
          "time": "0.154"
        },
        "43": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage][ok]",
          "time": "0.157"
        },
        "44": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.165"
        },
        "45": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][external_storage][drop]",
          "time": "0.180"
        },
        "46": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][no_storage][ok]",
          "time": "0.181"
        },
        "47": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_storage][ok]",
          "time": "0.188"
        },
        "48": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage][ok]",
          "time": "0.191"
        },
        "49": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage_struct][ok]",
          "time": "0.206"
        },
        "50": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][external_storage][drop]",
          "time": "0.174"
        },
        "51": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.129"
        },
        "52": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.127"
        },
        "53": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.125"
        },
        "54": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.130"
        },
        "55": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.127"
        },
        "56": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.133"
        },
        "57": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.127"
        },
        "58": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.128"
        },
        "59": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.133"
        },
        "60": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.129"
        },
        "61": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.131"
        },
        "62": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.134"
        },
        "63": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.132"
        },
        "64": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.140"
        },
        "65": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.135"
        },
        "66": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.210"
        },
        "67": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.209"
        },
        "68": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.213"
        },
        "69": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.207"
        },
        "70": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.213"
        },
        "71": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.210"
        },
        "72": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.216"
        },
        "73": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.208"
        },
        "74": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.215"
        },
        "75": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.220"
        },
        "76": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.213"
        },
        "77": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.221"
        },
        "78": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.215"
        },
        "79": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.219"
        },
        "80": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.211"
        },
        "81": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.274"
        },
        "82": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.279"
        },
        "83": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.276"
        },
        "84": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.273"
        },
        "85": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.281"
        },
        "86": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.283"
        },
        "87": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.281"
        },
        "88": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.276"
        },
        "89": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.284"
        },
        "90": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.284"
        },
        "91": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.286"
        },
        "92": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.279"
        },
        "93": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.288"
        },
        "94": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.284"
        },
        "95": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.284"
        },
        "96": {
          "classname": "tests.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.013"
        },
        "97": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.063"
        },
        "98": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.065"
        },
        "99": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.051"
        },
        "100": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "0.300"
        },
        "101": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.008"
        },
        "102": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.248"
        },
        "103": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.003"
        },
        "104": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.202"
        },
        "105": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.098"
        },
        "106": {
          "classname": "tests.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.011"
        }
      }
    }
  },
  "20230223/192623": {
    "aabundler-launcher": {
      "name": "AA Reference Bundler/0.4.0",
      "errors": "2",
      "failures": "101",
      "skipped": "1",
      "tests": "107",
      "time": "28.990",
      "timestamp": "2023-02-23T19:25:51.925456",
      "hostname": "fv-az396-215",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_bundle_replace_by_fee[]",
          "time": "0.066",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_bundle.py:40: in test_bundle_replace_by_fee\n    assert lower_fee_op.send().result\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "2": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender[]",
          "time": "0.099",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_bundle.py:58: in test_max_allowed_ops_unstaked_sender\n    userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "3": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender[]",
          "time": "0.095",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_bundle.py:78: in test_max_allowed_ops_staked_sender\n    wallet = deploy_and_deposit(w3, entrypoint_contract, \"SimpleWallet\", True)\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "4": {
          "classname": "tests.bundle.test_codehash",
          "name": "test_codehash_changed[]",
          "time": "0.085",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_codehash.py:43: in test_codehash_changed\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "5": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][no_storage][ok]",
          "time": "0.155",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "6": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][storage][drop]",
          "time": "0.155",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "7": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage][drop]",
          "time": "0.154",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "8": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.154",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "9": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_storage][ok]",
          "time": "0.153",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "10": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.158",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "11": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.152",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "12": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_init_code][drop]",
          "time": "0.293",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:309: in test_rule\n    userop = case.userop_build_func(w3, entrypoint_contract, entity_contract, case.rule)\ntests/bundle/test_storage_rules.py:41: in _with_initcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "13": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][context][drop]",
          "time": "0.154",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "14": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][external_storage][drop]",
          "time": "0.154",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "15": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][no_storage][ok]",
          "time": "0.124",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "16": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][storage][ok]",
          "time": "0.123",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "17": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage][ok]",
          "time": "0.122",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "18": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage_struct][ok]",
          "time": "0.124",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "19": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_storage][ok]",
          "time": "0.127",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "20": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage][ok]",
          "time": "0.125",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "21": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.123",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "22": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.122",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "23": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][context][ok]",
          "time": "0.124",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "24": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][external_storage][drop]",
          "time": "0.122",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "25": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][no_storage][ok]",
          "time": "0.172",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:309: in test_rule\n    userop = case.userop_build_func(w3, entrypoint_contract, entity_contract, case.rule)\ntests/bundle/test_storage_rules.py:67: in build_userop_for_factory\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "26": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][storage][drop]",
          "time": "0.175",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:309: in test_rule\n    userop = case.userop_build_func(w3, entrypoint_contract, entity_contract, case.rule)\ntests/bundle/test_storage_rules.py:67: in build_userop_for_factory\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "27": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage][drop]",
          "time": "0.176",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:309: in test_rule\n    userop = case.userop_build_func(w3, entrypoint_contract, entity_contract, case.rule)\ntests/bundle/test_storage_rules.py:67: in build_userop_for_factory\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "28": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage_struct][drop]",
          "time": "0.175",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:309: in test_rule\n    userop = case.userop_build_func(w3, entrypoint_contract, entity_contract, case.rule)\ntests/bundle/test_storage_rules.py:67: in build_userop_for_factory\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "29": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_storage][ok]",
          "time": "0.173",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:309: in test_rule\n    userop = case.userop_build_func(w3, entrypoint_contract, entity_contract, case.rule)\ntests/bundle/test_storage_rules.py:67: in build_userop_for_factory\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "30": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage][drop]",
          "time": "0.174",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:309: in test_rule\n    userop = case.userop_build_func(w3, entrypoint_contract, entity_contract, case.rule)\ntests/bundle/test_storage_rules.py:67: in build_userop_for_factory\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "31": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.175",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:309: in test_rule\n    userop = case.userop_build_func(w3, entrypoint_contract, entity_contract, case.rule)\ntests/bundle/test_storage_rules.py:67: in build_userop_for_factory\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "32": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][external_storage][drop]",
          "time": "0.187",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:309: in test_rule\n    userop = case.userop_build_func(w3, entrypoint_contract, entity_contract, case.rule)\ntests/bundle/test_storage_rules.py:67: in build_userop_for_factory\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "33": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][no_storage][ok]",
          "time": "0.123",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "34": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][storage][ok]",
          "time": "0.127",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "35": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage][ok]",
          "time": "0.122",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "36": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage_struct][ok]",
          "time": "0.124",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "37": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_storage][ok]",
          "time": "0.122",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "38": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage][ok]",
          "time": "0.122",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "39": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage_struct][ok]",
          "time": "0.122",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "40": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][external_storage][drop]",
          "time": "0.125",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "41": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][no_storage][ok]",
          "time": "0.090",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "42": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_storage][ok]",
          "time": "0.089",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "43": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage][ok]",
          "time": "0.090",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "44": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.089",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "45": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][external_storage][drop]",
          "time": "0.089",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "46": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][no_storage][ok]",
          "time": "0.100",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "47": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_storage][ok]",
          "time": "0.099",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "48": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage][ok]",
          "time": "0.101",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "49": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage_struct][ok]",
          "time": "0.101",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "50": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][external_storage][drop]",
          "time": "0.100",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "51": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.086",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "52": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.091",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "53": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.089",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "54": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.085",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "55": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.086",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "56": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.085",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "57": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.086",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "58": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.085",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "59": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.087",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "60": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.090",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "61": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.085",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "62": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.086",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "63": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.085",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "64": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.087",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "65": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.085",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "66": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.151",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "67": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.151",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "68": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.153",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "69": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.149",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "70": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.149",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "71": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.149",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "72": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.148",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "73": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.152",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "74": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.150",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "75": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.153",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "76": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.150",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "77": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.149",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "78": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.149",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "79": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.149",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "80": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.150",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "81": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.168",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "82": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.171",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "83": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.171",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "84": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.172",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "85": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.178",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "86": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.171",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "87": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.170",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "88": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.169",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "89": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.170",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "90": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.171",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "91": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.171",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "92": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.171",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "93": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.175",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "94": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.174",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "95": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.168",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "96": {
          "classname": "tests.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.013"
        },
        "97": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.046",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/rpc/test_eth_estimateUserOperationGas.py:18: in test_eth_estimateUserOperationGas\n    ).send()\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "98": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.045",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/rpc/test_eth_estimateUserOperationGas.py:28: in test_eth_estimateUserOperationGas_execution_revert\n    ).send()\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "99": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.044",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/rpc/test_eth_estimateUserOperationGas.py:36: in test_eth_estimateUserOperationGas_simulation_revert\n    ).send()\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "100": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "0.045",
          "error": {
            "message": "failed on setup with \"KeyError: 'code'\"",
            "#text": "tests/conftest.py:104: in execute_user_operation\n    userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "101": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.003"
        },
        "102": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.047",
          "error": {
            "message": "failed on setup with \"KeyError: 'code'\"",
            "#text": "tests/conftest.py:104: in execute_user_operation\n    userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "103": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.004"
        },
        "104": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.052",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/rpc/test_eth_sendUserOperation.py:16: in test_eth_sendUserOperation\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "105": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.051",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/rpc/test_eth_sendUserOperation.py:28: in test_eth_sendUserOperation_revert\n    response = bad_sig_userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "106": {
          "classname": "tests.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.010",
          "failure": {
            "message": "AssertionError: assert '0x1306b01bC3...7e94737673F53' == '0x0576a174D2...45A78A0C91B57'\n  - 0x0576a174D229E3cFA37253523E645A78A0C91B57\n  + 0x1306b01bC3e4AD202612D3843387e94737673F53",
            "#text": "tests/rpc/test_eth_supportedEntryPoints.py:11: in test_eth_supportedEntryPoints\n    assert supported_entrypoints[0] == CommandLineArgs.entrypoint\nE   AssertionError: assert '0x1306b01bC3...7e94737673F53' == '0x0576a174D2...45A78A0C91B57'\nE     - 0x0576a174D229E3cFA37253523E645A78A0C91B57\nE     + 0x1306b01bC3e4AD202612D3843387e94737673F53"
          }
        }
      }
    }
  },
  "20230223/185844": {
    "aabundler-launcher": {
      "name": "AA Reference Bundler/0.4.0",
      "errors": "2",
      "failures": "101",
      "skipped": "1",
      "tests": "107",
      "time": "26.997",
      "timestamp": "2023-02-23T18:58:16.104358",
      "hostname": "fv-az851-500",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_bundle_replace_by_fee[]",
          "time": "0.068",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_bundle.py:40: in test_bundle_replace_by_fee\n    assert lower_fee_op.send().result\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "2": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender[]",
          "time": "0.099",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_bundle.py:58: in test_max_allowed_ops_unstaked_sender\n    userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "3": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender[]",
          "time": "0.098",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_bundle.py:78: in test_max_allowed_ops_staked_sender\n    wallet = deploy_and_deposit(w3, entrypoint_contract, \"SimpleWallet\", True)\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "4": {
          "classname": "tests.bundle.test_codehash",
          "name": "test_codehash_changed[]",
          "time": "0.085",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_codehash.py:43: in test_codehash_changed\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "5": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][no_storage][ok]",
          "time": "0.156",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "6": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][storage][drop]",
          "time": "0.155",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "7": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage][drop]",
          "time": "0.155",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "8": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.155",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "9": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_storage][ok]",
          "time": "0.157",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "10": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.154",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "11": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.153",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "12": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_init_code][drop]",
          "time": "0.295",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:309: in test_rule\n    userop = case.userop_build_func(w3, entrypoint_contract, entity_contract, case.rule)\ntests/bundle/test_storage_rules.py:41: in _with_initcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "13": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][context][drop]",
          "time": "0.158",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "14": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][external_storage][drop]",
          "time": "0.155",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "15": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][no_storage][ok]",
          "time": "0.124",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "16": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][storage][ok]",
          "time": "0.124",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "17": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage][ok]",
          "time": "0.127",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "18": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage_struct][ok]",
          "time": "0.124",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "19": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_storage][ok]",
          "time": "0.125",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "20": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage][ok]",
          "time": "0.129",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "21": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.124",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "22": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.124",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "23": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][context][ok]",
          "time": "0.125",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "24": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][external_storage][drop]",
          "time": "0.127",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "25": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][no_storage][ok]",
          "time": "0.174",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:309: in test_rule\n    userop = case.userop_build_func(w3, entrypoint_contract, entity_contract, case.rule)\ntests/bundle/test_storage_rules.py:67: in build_userop_for_factory\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "26": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][storage][drop]",
          "time": "0.181",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:309: in test_rule\n    userop = case.userop_build_func(w3, entrypoint_contract, entity_contract, case.rule)\ntests/bundle/test_storage_rules.py:67: in build_userop_for_factory\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "27": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage][drop]",
          "time": "0.174",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:309: in test_rule\n    userop = case.userop_build_func(w3, entrypoint_contract, entity_contract, case.rule)\ntests/bundle/test_storage_rules.py:67: in build_userop_for_factory\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "28": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage_struct][drop]",
          "time": "0.176",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:309: in test_rule\n    userop = case.userop_build_func(w3, entrypoint_contract, entity_contract, case.rule)\ntests/bundle/test_storage_rules.py:67: in build_userop_for_factory\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "29": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_storage][ok]",
          "time": "0.173",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:309: in test_rule\n    userop = case.userop_build_func(w3, entrypoint_contract, entity_contract, case.rule)\ntests/bundle/test_storage_rules.py:67: in build_userop_for_factory\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "30": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage][drop]",
          "time": "0.175",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:309: in test_rule\n    userop = case.userop_build_func(w3, entrypoint_contract, entity_contract, case.rule)\ntests/bundle/test_storage_rules.py:67: in build_userop_for_factory\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "31": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.173",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:309: in test_rule\n    userop = case.userop_build_func(w3, entrypoint_contract, entity_contract, case.rule)\ntests/bundle/test_storage_rules.py:67: in build_userop_for_factory\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "32": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][external_storage][drop]",
          "time": "0.177",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:309: in test_rule\n    userop = case.userop_build_func(w3, entrypoint_contract, entity_contract, case.rule)\ntests/bundle/test_storage_rules.py:67: in build_userop_for_factory\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "33": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][no_storage][ok]",
          "time": "0.123",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "34": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][storage][ok]",
          "time": "0.123",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "35": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage][ok]",
          "time": "0.124",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "36": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage_struct][ok]",
          "time": "0.124",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "37": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_storage][ok]",
          "time": "0.134",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "38": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage][ok]",
          "time": "0.122",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "39": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage_struct][ok]",
          "time": "0.125",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "40": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][external_storage][drop]",
          "time": "0.127",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "41": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][no_storage][ok]",
          "time": "0.089",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "42": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_storage][ok]",
          "time": "0.089",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "43": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage][ok]",
          "time": "0.090",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "44": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.090",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "45": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][external_storage][drop]",
          "time": "0.091",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/bundle/test_storage_rules.py:310: in test_rule\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "46": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][no_storage][ok]",
          "time": "0.102",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "47": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_storage][ok]",
          "time": "0.101",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "48": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage][ok]",
          "time": "0.100",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "49": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage_struct][ok]",
          "time": "0.101",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "50": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][external_storage][drop]",
          "time": "0.101",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/bundle/test_storage_rules.py:306: in test_rule\n    entity_contract = deploy_and_deposit(\ntests/utils.py:55: in deploy_and_deposit\n    return staked_contract(w3, entrypoint_contract, contract)\ntests/utils.py:60: in staked_contract\n    tx_hash = contract.functions.addStake(entrypoint_contract.address, 2).transact(\n.venv/lib/python3.10/site-packages/web3/contract.py:1010: in transact\n    return transact_with_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1614: in transact_with_contract_function\n    txn_hash = web3.eth.send_transaction(transact_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:828: in send_transaction\n    return self._send_transaction(transaction)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:197: in request_blocking\n    response = self._make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/manager.py:150: in _make_request\n    return request_func(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/gas_price_strategy.py:89: in middleware\n    return make_request(method, (transaction,))\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/attrdict.py:33: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/formatting.py:94: in middleware\n    response = make_request(method, params)\n.venv/lib/python3.10/site-packages/web3/middleware/buffered_gas_estimate.py:37: in middleware\n    hex(get_buffered_gas_estimate(web3, transaction)),\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:134: in get_buffered_gas_estimate\n    gas_estimate = web3.eth.estimate_gas(gas_estimate_transaction)\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "51": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.086",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "52": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.092",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "53": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.089",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "54": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.086",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "55": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.086",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "56": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.086",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "57": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.091",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "58": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.086",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "59": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.086",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "60": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.089",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "61": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.086",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "62": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.086",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "63": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.087",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "64": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.087",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "65": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.085",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:40: in test_account_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "66": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.151",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "67": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.154",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "68": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.153",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "69": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.152",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "70": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.157",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "71": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.152",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "72": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.152",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "73": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.152",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "74": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.155",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "75": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.151",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "76": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.153",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "77": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.151",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "78": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.152",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "79": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.152",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "80": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.153",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/opbanning/test_op_banning.py:51: in test_paymaster_banned_opcode\n    ).send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "81": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.171",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "82": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.172",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "83": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.170",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "84": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.171",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "85": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.175",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "86": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.175",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "87": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.175",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "88": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.175",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "89": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.172",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "90": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.171",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "91": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.175",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "92": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.173",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "93": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.179",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "94": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.173",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "95": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.174",
          "failure": {
            "message": "web3.exceptions.ContractLogicError: execution reverted",
            "#text": "tests/opbanning/test_op_banning.py:67: in test_factory_banned_opcode\n    sender = deposit_to_undeployed_sender(w3, entrypoint_contract, initcode)\ntests/utils.py:114: in deposit_to_undeployed_sender\n    sender = get_sender_address(w3, initcode)\ntests/utils.py:108: in get_sender_address\n    return helper.functions.getSenderAddress(CommandLineArgs.entrypoint, initcode).call(\n.venv/lib/python3.10/site-packages/web3/contract.py:970: in call\n    return call_contract_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1525: in call_contract_function\n    return_data = web3.eth.call(\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:170: in formatted_response\n    apply_error_formatters(error_formatters, response)\n.venv/lib/python3.10/site-packages/web3/manager.py:70: in apply_error_formatters\n    formatted_resp = pipe(response, error_formatters)\ncytoolz/functoolz.pyx:666: in cytoolz.functoolz.pipe\n    ???\ncytoolz/functoolz.pyx:641: in cytoolz.functoolz.c_pipe\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/method_formatters.py:580: in raise_solidity_error_on_revert\n    raise ContractLogicError('execution reverted')\nE   web3.exceptions.ContractLogicError: execution reverted"
          }
        },
        "96": {
          "classname": "tests.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.013"
        },
        "97": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.048",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/rpc/test_eth_estimateUserOperationGas.py:18: in test_eth_estimateUserOperationGas\n    ).send()\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "98": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.048",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/rpc/test_eth_estimateUserOperationGas.py:28: in test_eth_estimateUserOperationGas_execution_revert\n    ).send()\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "99": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.047",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/rpc/test_eth_estimateUserOperationGas.py:36: in test_eth_estimateUserOperationGas_simulation_revert\n    ).send()\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "100": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "0.047",
          "error": {
            "message": "failed on setup with \"KeyError: 'code'\"",
            "#text": "tests/conftest.py:104: in execute_user_operation\n    userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "101": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.004"
        },
        "102": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.048",
          "error": {
            "message": "failed on setup with \"KeyError: 'code'\"",
            "#text": "tests/conftest.py:104: in execute_user_operation\n    userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "103": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.004"
        },
        "104": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.053",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/rpc/test_eth_sendUserOperation.py:16: in test_eth_sendUserOperation\n    response = userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "105": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.056",
          "failure": {
            "message": "KeyError: 'code'",
            "#text": "tests/rpc/test_eth_sendUserOperation.py:28: in test_eth_sendUserOperation_revert\n    response = bad_sig_userop.send()\ntests/types.py:48: in send\n    ).send(url)\ntests/types.py:62: in send\n    return jsonrpcclient.responses.to_result(\n.venv/lib/python3.10/site-packages/jsonrpcclient/responses.py:35: in to_result\n    response[\"error\"][\"code\"],\nE   KeyError: 'code'"
          }
        },
        "106": {
          "classname": "tests.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.011",
          "failure": {
            "message": "AssertionError: assert '0x1306b01bC3...7e94737673F53' == '0x0576a174D2...45A78A0C91B57'\n  - 0x0576a174D229E3cFA37253523E645A78A0C91B57\n  + 0x1306b01bC3e4AD202612D3843387e94737673F53",
            "#text": "tests/rpc/test_eth_supportedEntryPoints.py:11: in test_eth_supportedEntryPoints\n    assert supported_entrypoints[0] == CommandLineArgs.entrypoint\nE   AssertionError: assert '0x1306b01bC3...7e94737673F53' == '0x0576a174D2...45A78A0C91B57'\nE     - 0x0576a174D229E3cFA37253523E645A78A0C91B57\nE     + 0x1306b01bC3e4AD202612D3843387e94737673F53"
          }
        }
      }
    }
  },
  "20230210/171048": {
    "aabundler-launcher": {
      "name": "AA Reference Bundler/0.4.0",
      "errors": "0",
      "failures": "1",
      "skipped": "1",
      "tests": "107",
      "time": "43.382",
      "timestamp": "2023-02-10T17:10:02.984081",
      "hostname": "fv-az268-512",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_bundle_replace_by_fee[]",
          "time": "0.249"
        },
        "2": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender[]",
          "time": "0.528"
        },
        "3": {
          "classname": "tests.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender[]",
          "time": "0.567"
        },
        "4": {
          "classname": "tests.bundle.test_codehash",
          "name": "test_codehash_changed[]",
          "time": "0.318",
          "failure": {
            "message": "assert 1 == 0\n +  where 1 = len((AttributeDict({'args': AttributeDict({'userOpHash': b\"7)\\x9e\\x17P%\\x9e\\xff\\xa3\\xd5'\\xa0^\\x89\\xec\\xe1\\xcd\\xa8N\\x04:)f\\...53', 'blockHash': HexBytes('0xc97d41bd08b6d0908ca74a79133ffb08313d224ef16ef437664b151cbaca5eac'), 'blockNumber': 17}),))",
            "#text": "tests/bundle/test_codehash.py:60: in test_codehash_changed\n    assert_no_useroperation_event(entrypoint_contract, from_block=block_number)\ntests/bundle/test_codehash.py:18: in assert_no_useroperation_event\n    assert len(logs) == 0\nE   assert 1 == 0\nE    +  where 1 = len((AttributeDict({'args': AttributeDict({'userOpHash': b\"7)\\x9e\\x17P%\\x9e\\xff\\xa3\\xd5'\\xa0^\\x89\\xec\\xe1\\xcd\\xa8N\\x04:)f\\...53', 'blockHash': HexBytes('0xc97d41bd08b6d0908ca74a79133ffb08313d224ef16ef437664b151cbaca5eac'), 'blockNumber': 17}),))"
          }
        },
        "5": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][no_storage][ok]",
          "time": "0.256"
        },
        "6": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][storage][drop]",
          "time": "0.246"
        },
        "7": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage][drop]",
          "time": "0.252"
        },
        "8": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.265"
        },
        "9": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_storage][ok]",
          "time": "0.263"
        },
        "10": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.259"
        },
        "11": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.274"
        },
        "12": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][account_reference_storage_init_code][drop]",
          "time": "0.515"
        },
        "13": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][context][drop]",
          "time": "0.246"
        },
        "14": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][paymaster][external_storage][drop]",
          "time": "0.251"
        },
        "15": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][no_storage][ok]",
          "time": "0.284"
        },
        "16": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][storage][ok]",
          "time": "0.300"
        },
        "17": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage][ok]",
          "time": "0.306"
        },
        "18": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][reference_storage_struct][ok]",
          "time": "0.304"
        },
        "19": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_storage][ok]",
          "time": "0.306"
        },
        "20": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage][ok]",
          "time": "0.311"
        },
        "21": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.308"
        },
        "22": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.565"
        },
        "23": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][context][ok]",
          "time": "0.301"
        },
        "24": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][paymaster][external_storage][drop]",
          "time": "0.296"
        },
        "25": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][no_storage][ok]",
          "time": "0.329"
        },
        "26": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][storage][drop]",
          "time": "0.337"
        },
        "27": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage][drop]",
          "time": "0.345"
        },
        "28": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][reference_storage_struct][drop]",
          "time": "0.363"
        },
        "29": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_storage][ok]",
          "time": "0.349"
        },
        "30": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage][drop]",
          "time": "0.340"
        },
        "31": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.360"
        },
        "32": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][factory][external_storage][drop]",
          "time": "0.343"
        },
        "33": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][no_storage][ok]",
          "time": "0.475"
        },
        "34": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][storage][ok]",
          "time": "0.395"
        },
        "35": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage][ok]",
          "time": "0.393"
        },
        "36": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][reference_storage_struct][ok]",
          "time": "0.406"
        },
        "37": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_storage][ok]",
          "time": "0.385"
        },
        "38": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage][ok]",
          "time": "0.406"
        },
        "39": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][account_reference_storage_struct][ok]",
          "time": "0.421"
        },
        "40": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][factory][external_storage][drop]",
          "time": "0.389"
        },
        "41": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][no_storage][ok]",
          "time": "0.162"
        },
        "42": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_storage][ok]",
          "time": "0.163"
        },
        "43": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage][ok]",
          "time": "0.177"
        },
        "44": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.181"
        },
        "45": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[unstaked][account][external_storage][drop]",
          "time": "0.171"
        },
        "46": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][no_storage][ok]",
          "time": "0.208"
        },
        "47": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_storage][ok]",
          "time": "0.215"
        },
        "48": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage][ok]",
          "time": "0.217"
        },
        "49": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][account_reference_storage_struct][ok]",
          "time": "0.264"
        },
        "50": {
          "classname": "tests.bundle.test_storage_rules",
          "name": "test_rule[staked][account][external_storage][drop]",
          "time": "0.212"
        },
        "51": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.146"
        },
        "52": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.144"
        },
        "53": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.146"
        },
        "54": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.164"
        },
        "55": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.148"
        },
        "56": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.148"
        },
        "57": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.151"
        },
        "58": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.146"
        },
        "59": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.146"
        },
        "60": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.151"
        },
        "61": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.159"
        },
        "62": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.150"
        },
        "63": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.161"
        },
        "64": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.166"
        },
        "65": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.162"
        },
        "66": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.245"
        },
        "67": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.247"
        },
        "68": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.249"
        },
        "69": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.251"
        },
        "70": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.254"
        },
        "71": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.248"
        },
        "72": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.253"
        },
        "73": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.252"
        },
        "74": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.252"
        },
        "75": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.256"
        },
        "76": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.252"
        },
        "77": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.256"
        },
        "78": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.258"
        },
        "79": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.252"
        },
        "80": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.253"
        },
        "81": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.330"
        },
        "82": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.333"
        },
        "83": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.330"
        },
        "84": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.336"
        },
        "85": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.332"
        },
        "86": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.339"
        },
        "87": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.349"
        },
        "88": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.337"
        },
        "89": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.338"
        },
        "90": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.335"
        },
        "91": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.345"
        },
        "92": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.342"
        },
        "93": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.350"
        },
        "94": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.354"
        },
        "95": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.349"
        },
        "96": {
          "classname": "tests.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.017"
        },
        "97": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.080"
        },
        "98": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.075"
        },
        "99": {
          "classname": "tests.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.071"
        },
        "100": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "0.250"
        },
        "101": {
          "classname": "tests.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.005"
        },
        "102": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.258"
        },
        "103": {
          "classname": "tests.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.005"
        },
        "104": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.224"
        },
        "105": {
          "classname": "tests.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.104"
        },
        "106": {
          "classname": "tests.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.015"
        }
      }
    }
  },
  "20230209/204613": {
    "aabundler-launcher": {
      "name": "AA Reference Bundler/0.4.0",
      "errors": "0",
      "failures": "0",
      "skipped": "1",
      "tests": "4",
      "time": "12.224",
      "timestamp": "2023-02-09T20:45:59.604898",
      "hostname": "fv-az567-272",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.205"
        },
        "2": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.252"
        },
        "3": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.388"
        }
      }
    }
  },
  "20230201/110622": {
    "aabundler-launcher": {
      "name": "AA Reference Bundler/0.4.0",
      "errors": "0",
      "failures": "0",
      "skipped": "1",
      "tests": "4",
      "time": "13.362",
      "timestamp": "2023-02-01T11:06:07.136914",
      "hostname": "fv-az567-287",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.163"
        },
        "2": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.221"
        },
        "3": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.317"
        }
      }
    }
  },
  "20230128/014845": {
    "aabundler-launcher": {
      "name": "AA Reference Bundler/0.4.0",
      "errors": "0",
      "failures": "0",
      "skipped": "1",
      "tests": "4",
      "time": "14.485",
      "timestamp": "2023-01-28T01:48:28.674330",
      "hostname": "fv-az175-198",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.226"
        },
        "2": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.280"
        },
        "3": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.384"
        }
      }
    }
  },
  "20230128/013125": {
    "aabundler-launcher": {
      "name": "AA Reference Bundler/0.4.0",
      "errors": "0",
      "failures": "0",
      "skipped": "1",
      "tests": "4",
      "time": "16.908",
      "timestamp": "2023-01-28T01:31:06.386039",
      "hostname": "fv-az176-227",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.228"
        },
        "2": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.299"
        },
        "3": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.488"
        }
      }
    }
  },
  "20230128/012205": {
    "aabundler-launcher": {
      "name": "AA Reference Bundler/0.4.0",
      "errors": "0",
      "failures": "0",
      "skipped": "1",
      "tests": "4",
      "time": "10.404",
      "timestamp": "2023-01-28T01:21:54.090149",
      "hostname": "fv-az440-861",
      "testcase": {
        "0": {
          "classname": "",
          "name": "tests.bundle.test_stake_rules",
          "time": "0.000",
          "skipped": {
            "message": "collection skipped",
            "#text": "('/home/runner/work/bundler-test-executor/bundler-test-executor/bundler-spec-tests/tests/bundle/test_stake_rules.py', 12, 'Skipped')"
          }
        },
        "1": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.152"
        },
        "2": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.207"
        },
        "3": {
          "classname": "tests.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.284"
        }
      }
    }
  }
}
