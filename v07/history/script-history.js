testHistory={
  "20240407/182001": {
    "aabundler": {
      "name": "aabundler",
      "errors": "0",
      "failures": "0",
      "skipped": "0",
      "tests": "160",
      "time": "57.338",
      "timestamp": "2024-04-07T18:18:58.869399",
      "hostname": "fv-az1530-337",
      "testcase": {
        "0": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[only_priority_fee_bump]",
          "time": "0.381"
        },
        "1": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[only_max_fee_bump]",
          "time": "0.326"
        },
        "2": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[with_same_fee]",
          "time": "0.324"
        },
        "3": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[with_less_fee]",
          "time": "0.326"
        },
        "4": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_below_threshold]",
          "time": "0.317"
        },
        "5": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_at_threshold]",
          "time": "0.330"
        },
        "6": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_above_threshold]",
          "time": "0.330"
        },
        "7": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender",
          "time": "1.078"
        },
        "8": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender",
          "time": "1.164"
        },
        "9": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_ban_user_op_access_other_ops_sender_in_bundle",
          "time": "0.933"
        },
        "10": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_ban_user_sender_double_role_in_bundle",
          "time": "0.807"
        },
        "11": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_stake_check_in_bundler",
          "time": "0.205"
        },
        "12": {
          "classname": "tests.single.bundle.test_codehash",
          "name": "test_codehash_changed",
          "time": "1.030"
        },
        "13": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][paymaster][no_storage][ok]",
          "time": "0.324"
        },
        "14": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]unstaked][paymaster][storage][drop]",
          "time": "0.327"
        },
        "15": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][reference_storage][drop]",
          "time": "0.330"
        },
        "16": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][reference_storage_struct][drop]",
          "time": "0.330"
        },
        "17": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][paymaster][account_storage][ok]",
          "time": "0.343"
        },
        "18": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][paymaster][account_reference_storage][ok]",
          "time": "0.355"
        },
        "19": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.358"
        },
        "20": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][paymaster][account_reference_storage_init_code][drop0]",
          "time": "0.640"
        },
        "21": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[EREP-050]unstaked][paymaster][context][drop]",
          "time": "0.248"
        },
        "22": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][external_storage_read][drop]",
          "time": "0.343"
        },
        "23": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][paymaster][out_of_gas][drop]",
          "time": "0.424"
        },
        "24": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][paymaster][sstore_out_of_gas][drop]",
          "time": "0.349"
        },
        "25": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][paymaster][no_storage][ok]",
          "time": "0.356"
        },
        "26": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]staked][paymaster][storage][ok]",
          "time": "0.354"
        },
        "27": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][paymaster][reference_storage][ok]",
          "time": "0.384"
        },
        "28": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][paymaster][reference_storage_struct][ok]",
          "time": "0.375"
        },
        "29": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][reference_storage_struct][ok]",
          "time": "0.380"
        },
        "30": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][paymaster][account_storage][ok]",
          "time": "0.370"
        },
        "31": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][paymaster][account_reference_storage][ok]",
          "time": "0.408"
        },
        "32": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][paymaster][account_reference_storage_struct][ok]",
          "time": "0.374"
        },
        "33": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "0.594"
        },
        "34": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[EREP-050]staked][paymaster][context][ok]",
          "time": "0.400"
        },
        "35": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][external_storage_write][drop]",
          "time": "0.369"
        },
        "36": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][external_storage_read][ok]",
          "time": "0.380"
        },
        "37": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][paymaster][out_of_gas][drop]",
          "time": "0.448"
        },
        "38": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][paymaster][sstore_out_of_gas][drop]",
          "time": "0.372"
        },
        "39": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][no_storage][ok]",
          "time": "0.436"
        },
        "40": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][storage][drop]",
          "time": "0.433"
        },
        "41": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][reference_storage][drop]",
          "time": "0.445"
        },
        "42": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][factory][reference_storage_struct][drop]",
          "time": "0.449"
        },
        "43": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][factory][account_storage][ok]",
          "time": "0.457"
        },
        "44": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][factory][account_reference_storage][drop]",
          "time": "0.458"
        },
        "45": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][factory][account_reference_storage_struct][drop]",
          "time": "0.456"
        },
        "46": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][external_storage_read][drop]",
          "time": "0.458"
        },
        "47": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-042]unstaked][factory][EXTCODEx_CALLx_undeployed_sender][ok]",
          "time": "0.419"
        },
        "48": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODESIZE_undeployed_contract][drop]",
          "time": "0.413"
        },
        "49": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODEHASH_undeployed_contract][drop]",
          "time": "0.407"
        },
        "50": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODECOPY_undeployed_contract][drop]",
          "time": "0.520"
        },
        "51": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][CALL_undeployed_contract][drop]",
          "time": "0.412"
        },
        "52": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][CALLCODE_undeployed_contract][drop]",
          "time": "0.405"
        },
        "53": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][DELEGATECALL_undeployed_contract][drop]",
          "time": "0.416"
        },
        "54": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][STATICCALL_undeployed_contract][drop]",
          "time": "0.401"
        },
        "55": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][factory][out_of_gas][drop]",
          "time": "0.539"
        },
        "56": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][factory][sstore_out_of_gas][drop]",
          "time": "0.464"
        },
        "57": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][factory][no_storage][ok]",
          "time": "0.481"
        },
        "58": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]staked][factory][storage][ok]",
          "time": "0.524"
        },
        "59": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][factory][reference_storage][ok]",
          "time": "0.545"
        },
        "60": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][factory][reference_storage_struct][ok]",
          "time": "0.503"
        },
        "61": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][factory][account_storage][ok]",
          "time": "0.477"
        },
        "62": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][factory][account_reference_storage][ok]",
          "time": "0.488"
        },
        "63": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][factory][account_reference_storage_struct][ok]",
          "time": "0.493"
        },
        "64": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][factory][external_storage_write][drop]",
          "time": "0.534"
        },
        "65": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][factory][external_storage_read][ok]",
          "time": "0.493"
        },
        "66": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][factory][out_of_gas][drop]",
          "time": "0.581"
        },
        "67": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][factory][sstore_out_of_gas][drop]",
          "time": "0.509"
        },
        "68": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][account][no_storage][ok]",
          "time": "0.338"
        },
        "69": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][account][account_storage][ok]",
          "time": "0.289"
        },
        "70": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][account][account_reference_storage][ok]",
          "time": "0.311"
        },
        "71": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][account][account_reference_storage_init_code][drop]",
          "time": "0.442"
        },
        "72": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][account][account_reference_storage_init_code][ok]",
          "time": "0.517"
        },
        "73": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][paymaster][account_reference_storage_init_code][drop1]",
          "time": "0.512"
        },
        "74": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][account][account_reference_storage_struct][ok]",
          "time": "0.308"
        },
        "75": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][account][external_storage_read][drop]",
          "time": "0.285"
        },
        "76": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][account][out_of_gas][drop]",
          "time": "0.380"
        },
        "77": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][account][sstore_out_of_gas][drop]",
          "time": "0.293"
        },
        "78": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][account][no_storage][ok]",
          "time": "0.295"
        },
        "79": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][account][account_storage][ok]",
          "time": "0.315"
        },
        "80": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][account][account_reference_storage][ok]",
          "time": "0.329"
        },
        "81": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][account][account_reference_storage_struct][ok]",
          "time": "0.325"
        },
        "82": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][account][out_of_gas][drop]",
          "time": "0.393"
        },
        "83": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][account][sstore_out_of_gas][drop]",
          "time": "0.321"
        },
        "84": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][account][external_storage_write][drop]",
          "time": "0.315"
        },
        "85": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][account][external_storage_read][ok]",
          "time": "0.336"
        },
        "86": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-011]unstaked][account][entryPoint_call_balanceOf][drop]",
          "time": "0.302"
        },
        "87": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-061]unstaked][account][eth_value_transfer_forbidden][drop]",
          "time": "0.287"
        },
        "88": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-053]unstaked][account][eth_value_transfer_entryPoint][ok]",
          "time": "0.330"
        },
        "89": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-052]unstaked][account][eth_value_transfer_entryPoint_depositTo][ok]",
          "time": "0.334"
        },
        "90": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODESIZE_undeployed_contract][drop]",
          "time": "0.241"
        },
        "91": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODEHASH_undeployed_contract][drop]",
          "time": "0.244"
        },
        "92": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODECOPY_undeployed_contract][drop]",
          "time": "0.244"
        },
        "93": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODESIZE_entrypoint][drop]",
          "time": "0.263"
        },
        "94": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODEHASH_entrypoint][drop]",
          "time": "0.260"
        },
        "95": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODECOPY_entrypoint][drop]",
          "time": "0.270"
        },
        "96": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][CALL_undeployed_contract][drop]",
          "time": "0.237"
        },
        "97": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][CALLCODE_undeployed_contract][drop]",
          "time": "0.236"
        },
        "98": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][DELEGATECALL_undeployed_contract][drop]",
          "time": "0.246"
        },
        "99": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][STATICCALL_undeployed_contract][drop]",
          "time": "0.244"
        },
        "100": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-062]unstaked][account][CALL_undeployed_contract_allowed_precompile][ok]",
          "time": "0.295"
        },
        "101": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "0.185"
        },
        "102": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "0.188"
        },
        "103": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "0.186"
        },
        "104": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "0.190"
        },
        "105": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "0.189"
        },
        "106": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "0.196"
        },
        "107": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "0.193"
        },
        "108": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "0.197"
        },
        "109": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "0.198"
        },
        "110": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "0.203"
        },
        "111": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "0.204"
        },
        "112": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "0.205"
        },
        "113": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "0.216"
        },
        "114": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "0.225"
        },
        "115": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "0.260"
        },
        "116": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_allowed_opcode_sequence[GAS CALL]",
          "time": "0.254"
        },
        "117": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_allowed_opcode_sequence[GAS DELEGATECALL]",
          "time": "0.260"
        },
        "118": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "0.253"
        },
        "119": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "0.260"
        },
        "120": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "0.255"
        },
        "121": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "0.257"
        },
        "122": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "0.258"
        },
        "123": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "0.265"
        },
        "124": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "0.264"
        },
        "125": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "0.267"
        },
        "126": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "0.274"
        },
        "127": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "0.272"
        },
        "128": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "0.277"
        },
        "129": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "0.279"
        },
        "130": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "0.283"
        },
        "131": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "0.292"
        },
        "132": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "0.281"
        },
        "133": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "0.375"
        },
        "134": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "0.378"
        },
        "135": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "0.377"
        },
        "136": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "0.373"
        },
        "137": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "0.375"
        },
        "138": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "0.381"
        },
        "139": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "0.371"
        },
        "140": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "0.378"
        },
        "141": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "0.378"
        },
        "142": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "0.384"
        },
        "143": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "0.384"
        },
        "144": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "0.393"
        },
        "145": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "0.396"
        },
        "146": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "0.402"
        },
        "147": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "0.404"
        },
        "148": {
          "classname": "tests.single.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.011"
        },
        "149": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.041"
        },
        "150": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "0.037"
        },
        "151": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.033"
        },
        "152": {
          "classname": "tests.single.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "1.100"
        },
        "153": {
          "classname": "tests.single.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.004"
        },
        "154": {
          "classname": "tests.single.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.404"
        },
        "155": {
          "classname": "tests.single.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.004"
        },
        "156": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.372"
        },
        "157": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.155"
        },
        "158": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_invalid_signature",
          "time": "0.154"
        },
        "159": {
          "classname": "tests.single.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.012"
        }
      }
    }
  }
}
