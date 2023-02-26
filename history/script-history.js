testHistory={
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
