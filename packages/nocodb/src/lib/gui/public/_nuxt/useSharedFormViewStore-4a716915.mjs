import { e as computed, a as unref, cm as getCurrentInstance, r as ref, cn as onBeforeMount, w as watch, n as reactive, cQ as isRef, dJ as isReactive, dK as isReadonly, a_ as onBeforeUnmount, i as inject, p as provide, P as nextTick, av as useInjectionState, N as useApi, a3 as useMetas, l as isVirtualCol, U as UITypes, R as RelationTypes, K as extractSdkResponseErrorMsg, dL as ErrorMessages, I as message } from "./entry-fe2e349d.mjs";
import { S as SharedViewPasswordInj } from "./index-c79a04bb.mjs";
import { u as useProvideSmartsheetRowStore } from "./useVirtualCell-79bce99d.mjs";
function unwrapObj(obj) {
  let ignoreKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return Object.keys(obj).reduce((o, k) => {
    if (ignoreKeys.includes(k))
      return o;
    o[k] = unref(obj[k]);
    return o;
  }, {});
}
function isFunction(val) {
  return typeof val === "function";
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function get(obj, stringPath, def) {
  let current = obj;
  const path = stringPath.split(".");
  for (let i = 0; i < path.length; i++) {
    if (!current[path[i]])
      return def;
    current = current[path[i]];
  }
  return current;
}
function gatherBooleanGroupProperties(group, nestedResults, property) {
  return computed(() => {
    return group.some((path) => {
      return get(nestedResults, path, {
        [property]: false
      })[property];
    });
  });
}
function gatherArrayGroupProperties(group, nestedResults, property) {
  return computed(() => {
    return group.reduce((all, path) => {
      const fetchedProperty = get(nestedResults, path, {
        [property]: false
      })[property] || [];
      return all.concat(fetchedProperty);
    }, []);
  });
}
function callRule(rule, value, siblingState, instance) {
  return rule.call(instance, unref(value), unref(siblingState), instance);
}
function normalizeValidatorResponse(result) {
  return result.$valid !== void 0 ? !result.$valid : !result;
}
function createAsyncResult(rule, model, $pending, $dirty, _ref, $response, instance) {
  let {
    $lazy,
    $rewardEarly
  } = _ref;
  let watchTargets = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [];
  let siblingState = arguments.length > 8 ? arguments[8] : void 0;
  let $lastInvalidState = arguments.length > 9 ? arguments[9] : void 0;
  let $lastCommittedOn = arguments.length > 10 ? arguments[10] : void 0;
  const $invalid = ref(!!$dirty.value);
  const $pendingCounter = ref(0);
  $pending.value = false;
  const $unwatch = watch([model, $dirty].concat(watchTargets, $lastCommittedOn), () => {
    if ($lazy && !$dirty.value || $rewardEarly && !$lastInvalidState.value && !$pending.value) {
      return;
    }
    let ruleResult;
    try {
      ruleResult = callRule(rule, model, siblingState, instance);
    } catch (err) {
      ruleResult = Promise.reject(err);
    }
    $pendingCounter.value++;
    $pending.value = !!$pendingCounter.value;
    $invalid.value = false;
    Promise.resolve(ruleResult).then((data) => {
      $pendingCounter.value--;
      $pending.value = !!$pendingCounter.value;
      $response.value = data;
      $invalid.value = normalizeValidatorResponse(data);
    }).catch((error) => {
      $pendingCounter.value--;
      $pending.value = !!$pendingCounter.value;
      $response.value = error;
      $invalid.value = true;
    });
  }, {
    immediate: true,
    deep: typeof model === "object"
  });
  return {
    $invalid,
    $unwatch
  };
}
function createSyncResult(rule, model, $dirty, _ref2, $response, instance, siblingState, $lastInvalidState) {
  let {
    $lazy,
    $rewardEarly
  } = _ref2;
  const $unwatch = () => ({});
  const $invalid = computed(() => {
    if ($lazy && !$dirty.value || $rewardEarly && !$lastInvalidState.value) {
      return false;
    }
    let returnValue = true;
    try {
      const result = callRule(rule, model, siblingState, instance);
      $response.value = result;
      returnValue = normalizeValidatorResponse(result);
    } catch (err) {
      $response.value = err;
    }
    return returnValue;
  });
  return {
    $unwatch,
    $invalid
  };
}
function createValidatorResult(rule, model, $dirty, config, instance, validatorName, propertyKey, propertyPath, siblingState, $lastInvalidState, $lastCommittedOn) {
  const $pending = ref(false);
  const $params = rule.$params || {};
  const $response = ref(null);
  let $invalid;
  let $unwatch;
  if (rule.$async) {
    ({
      $invalid,
      $unwatch
    } = createAsyncResult(rule.$validator, model, $pending, $dirty, config, $response, instance, rule.$watchTargets, siblingState, $lastInvalidState, $lastCommittedOn));
  } else {
    ({
      $invalid,
      $unwatch
    } = createSyncResult(rule.$validator, model, $dirty, config, $response, instance, siblingState, $lastInvalidState));
  }
  const message2 = rule.$message;
  const $message = isFunction(message2) ? computed(() => message2(unwrapObj({
    $pending,
    $invalid,
    $params: unwrapObj($params),
    $model: model,
    $response,
    $validator: validatorName,
    $propertyPath: propertyPath,
    $property: propertyKey
  }))) : message2 || "";
  return {
    $message,
    $params,
    $pending,
    $invalid,
    $response,
    $unwatch
  };
}
function sortValidations() {
  let validationsRaw = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const validations = unref(validationsRaw);
  const validationKeys = Object.keys(validations);
  const rules = {};
  const nestedValidators = {};
  const config = {};
  let validationGroups = null;
  validationKeys.forEach((key) => {
    const v = validations[key];
    switch (true) {
      case isFunction(v.$validator):
        rules[key] = v;
        break;
      case isFunction(v):
        rules[key] = {
          $validator: v
        };
        break;
      case key === "$validationGroups":
        validationGroups = v;
        break;
      case key.startsWith("$"):
        config[key] = v;
        break;
      default:
        nestedValidators[key] = v;
    }
  });
  return {
    rules,
    nestedValidators,
    config,
    validationGroups
  };
}
function _empty() {
}
const ROOT_PATH = "__root";
function _call(body, then, direct) {
  if (direct) {
    return then ? then(body()) : body();
  }
  try {
    var result = Promise.resolve(body());
    return then ? result.then(then) : result;
  } catch (e) {
    return Promise.reject(e);
  }
}
function _callIgnored(body, direct) {
  return _call(body, _empty, direct);
}
function _invoke(body, then) {
  var result = body();
  if (result && result.then) {
    return result.then(then);
  }
  return then(result);
}
function _async(f) {
  return function() {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }
    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
function createValidationResults(rules, model, key, resultsCache, path, config, instance, externalResults, siblingState) {
  const ruleKeys = Object.keys(rules);
  const cachedResult = resultsCache.get(path, rules);
  const $dirty = ref(false);
  const $lastInvalidState = ref(false);
  const $lastCommittedOn = ref(0);
  if (cachedResult) {
    if (!cachedResult.$partial)
      return cachedResult;
    cachedResult.$unwatch();
    $dirty.value = cachedResult.$dirty.value;
  }
  const result = {
    $dirty,
    $path: path,
    $touch: () => {
      if (!$dirty.value)
        $dirty.value = true;
    },
    $reset: () => {
      if ($dirty.value)
        $dirty.value = false;
    },
    $commit: () => {
    }
  };
  if (!ruleKeys.length) {
    cachedResult && resultsCache.set(path, rules, result);
    return result;
  }
  ruleKeys.forEach((ruleKey) => {
    result[ruleKey] = createValidatorResult(rules[ruleKey], model, result.$dirty, config, instance, ruleKey, key, path, siblingState, $lastInvalidState, $lastCommittedOn);
  });
  result.$externalResults = computed(() => {
    if (!externalResults.value)
      return [];
    return [].concat(externalResults.value).map((stringError, index) => ({
      $propertyPath: path,
      $property: key,
      $validator: "$externalResults",
      $uid: `${path}-externalResult-${index}`,
      $message: stringError,
      $params: {},
      $response: null,
      $pending: false
    }));
  });
  result.$invalid = computed(() => {
    const r = ruleKeys.some((ruleKey) => unref(result[ruleKey].$invalid));
    $lastInvalidState.value = r;
    return !!result.$externalResults.value.length || r;
  });
  result.$pending = computed(() => ruleKeys.some((ruleKey) => unref(result[ruleKey].$pending)));
  result.$error = computed(() => result.$dirty.value ? result.$pending.value || result.$invalid.value : false);
  result.$silentErrors = computed(() => ruleKeys.filter((ruleKey) => unref(result[ruleKey].$invalid)).map((ruleKey) => {
    const res = result[ruleKey];
    return reactive({
      $propertyPath: path,
      $property: key,
      $validator: ruleKey,
      $uid: `${path}-${ruleKey}`,
      $message: res.$message,
      $params: res.$params,
      $response: res.$response,
      $pending: res.$pending
    });
  }).concat(result.$externalResults.value));
  result.$errors = computed(() => result.$dirty.value ? result.$silentErrors.value : []);
  result.$unwatch = () => ruleKeys.forEach((ruleKey) => {
    result[ruleKey].$unwatch();
  });
  result.$commit = () => {
    $lastInvalidState.value = true;
    $lastCommittedOn.value = Date.now();
  };
  resultsCache.set(path, rules, result);
  return result;
}
function collectNestedValidationResults(validations, nestedState, path, resultsCache, config, instance, nestedExternalResults) {
  const nestedValidationKeys = Object.keys(validations);
  if (!nestedValidationKeys.length)
    return {};
  return nestedValidationKeys.reduce((results, nestedKey) => {
    results[nestedKey] = setValidations({
      validations: validations[nestedKey],
      state: nestedState,
      key: nestedKey,
      parentKey: path,
      resultsCache,
      globalConfig: config,
      instance,
      externalResults: nestedExternalResults
    });
    return results;
  }, {});
}
function createMetaFields(results, nestedResults, childResults) {
  const allResults = computed(() => [nestedResults, childResults].filter((res) => res).reduce((allRes, res) => {
    return allRes.concat(Object.values(unref(res)));
  }, []));
  const $dirty = computed({
    get() {
      return results.$dirty.value || (allResults.value.length ? allResults.value.every((r) => r.$dirty) : false);
    },
    set(v) {
      results.$dirty.value = v;
    }
  });
  const $silentErrors = computed(() => {
    const modelErrors = unref(results.$silentErrors) || [];
    const nestedErrors = allResults.value.filter((result) => (unref(result).$silentErrors || []).length).reduce((errors, result) => {
      return errors.concat(...result.$silentErrors);
    }, []);
    return modelErrors.concat(nestedErrors);
  });
  const $errors = computed(() => {
    const modelErrors = unref(results.$errors) || [];
    const nestedErrors = allResults.value.filter((result) => (unref(result).$errors || []).length).reduce((errors, result) => {
      return errors.concat(...result.$errors);
    }, []);
    return modelErrors.concat(nestedErrors);
  });
  const $invalid = computed(() => allResults.value.some((r) => r.$invalid) || unref(results.$invalid) || false);
  const $pending = computed(() => allResults.value.some((r) => unref(r.$pending)) || unref(results.$pending) || false);
  const $anyDirty = computed(() => allResults.value.some((r) => r.$dirty) || allResults.value.some((r) => r.$anyDirty) || $dirty.value);
  const $error = computed(() => $dirty.value ? $pending.value || $invalid.value : false);
  const $touch = () => {
    results.$touch();
    allResults.value.forEach((result) => {
      result.$touch();
    });
  };
  const $commit = () => {
    results.$commit();
    allResults.value.forEach((result) => {
      result.$commit();
    });
  };
  const $reset = () => {
    results.$reset();
    allResults.value.forEach((result) => {
      result.$reset();
    });
  };
  if (allResults.value.length && allResults.value.every((nr) => nr.$dirty))
    $touch();
  return {
    $dirty,
    $errors,
    $invalid,
    $anyDirty,
    $error,
    $pending,
    $touch,
    $reset,
    $silentErrors,
    $commit
  };
}
function setValidations(_ref) {
  const $validate = _async(function() {
    $touch();
    return _invoke(function() {
      if (mergedConfig.$rewardEarly) {
        $commit();
        return _callIgnored(nextTick);
      }
    }, function() {
      return _call(nextTick, function() {
        return new Promise((resolve) => {
          if (!$pending.value)
            return resolve(!$invalid.value);
          const unwatch = watch($pending, () => {
            resolve(!$invalid.value);
            unwatch();
          });
        });
      });
    });
  });
  let {
    validations,
    state,
    key,
    parentKey,
    childResults,
    resultsCache,
    globalConfig = {},
    instance,
    externalResults
  } = _ref;
  const path = parentKey ? `${parentKey}.${key}` : key;
  const {
    rules,
    nestedValidators,
    config,
    validationGroups
  } = sortValidations(validations);
  const mergedConfig = Object.assign({}, globalConfig, config);
  const nestedState = key ? computed(() => {
    const s = unref(state);
    return s ? unref(s[key]) : void 0;
  }) : state;
  const cachedExternalResults = Object.assign({}, unref(externalResults) || {});
  const nestedExternalResults = computed(() => {
    const results2 = unref(externalResults);
    if (!key)
      return results2;
    return results2 ? unref(results2[key]) : void 0;
  });
  const results = createValidationResults(rules, nestedState, key, resultsCache, path, mergedConfig, instance, nestedExternalResults, state);
  const nestedResults = collectNestedValidationResults(nestedValidators, nestedState, path, resultsCache, mergedConfig, instance, nestedExternalResults);
  const $validationGroups = {};
  if (validationGroups) {
    Object.entries(validationGroups).forEach((_ref2) => {
      let [key2, group] = _ref2;
      $validationGroups[key2] = {
        $invalid: gatherBooleanGroupProperties(group, nestedResults, "$invalid"),
        $error: gatherBooleanGroupProperties(group, nestedResults, "$error"),
        $pending: gatherBooleanGroupProperties(group, nestedResults, "$pending"),
        $errors: gatherArrayGroupProperties(group, nestedResults, "$errors"),
        $silentErrors: gatherArrayGroupProperties(group, nestedResults, "$silentErrors")
      };
    });
  }
  const {
    $dirty,
    $errors,
    $invalid,
    $anyDirty,
    $error,
    $pending,
    $touch,
    $reset,
    $silentErrors,
    $commit
  } = createMetaFields(results, nestedResults, childResults);
  const $model = key ? computed({
    get: () => unref(nestedState),
    set: (val) => {
      $dirty.value = true;
      const s = unref(state);
      const external = unref(externalResults);
      if (external) {
        external[key] = cachedExternalResults[key];
      }
      if (isRef(s[key])) {
        s[key].value = val;
      } else {
        s[key] = val;
      }
    }
  }) : null;
  if (key && mergedConfig.$autoDirty) {
    watch(nestedState, () => {
      if (!$dirty.value)
        $touch();
      const external = unref(externalResults);
      if (external) {
        external[key] = cachedExternalResults[key];
      }
    }, {
      flush: "sync"
    });
  }
  function $getResultsForChild(key2) {
    return (childResults.value || {})[key2];
  }
  function $clearExternalResults() {
    if (isRef(externalResults)) {
      externalResults.value = cachedExternalResults;
    } else {
      if (Object.keys(cachedExternalResults).length === 0) {
        Object.keys(externalResults).forEach((k) => {
          delete externalResults[k];
        });
      } else {
        Object.assign(externalResults, cachedExternalResults);
      }
    }
  }
  return reactive(Object.assign({}, results, {
    $model,
    $dirty,
    $error,
    $errors,
    $invalid,
    $anyDirty,
    $pending,
    $touch,
    $reset,
    $path: path || ROOT_PATH,
    $silentErrors,
    $validate,
    $commit
  }, childResults && {
    $getResultsForChild,
    $clearExternalResults,
    $validationGroups
  }, nestedResults));
}
class ResultsStorage {
  constructor() {
    this.storage = /* @__PURE__ */ new Map();
  }
  set(path, rules, result) {
    this.storage.set(path, {
      rules,
      result
    });
  }
  checkRulesValidity(path, rules, storedRules) {
    const storedRulesKeys = Object.keys(storedRules);
    const newRulesKeys = Object.keys(rules);
    if (newRulesKeys.length !== storedRulesKeys.length)
      return false;
    const hasAllValidators = newRulesKeys.every((ruleKey) => storedRulesKeys.includes(ruleKey));
    if (!hasAllValidators)
      return false;
    return newRulesKeys.every((ruleKey) => {
      if (!rules[ruleKey].$params)
        return true;
      return Object.keys(rules[ruleKey].$params).every((paramKey) => {
        return unref(storedRules[ruleKey].$params[paramKey]) === unref(rules[ruleKey].$params[paramKey]);
      });
    });
  }
  get(path, rules) {
    const storedRuleResultPair = this.storage.get(path);
    if (!storedRuleResultPair)
      return void 0;
    const {
      rules: storedRules,
      result
    } = storedRuleResultPair;
    const isValidCache = this.checkRulesValidity(path, rules, storedRules);
    const $unwatch = result.$unwatch ? result.$unwatch : () => ({});
    if (!isValidCache)
      return {
        $dirty: result.$dirty,
        $partial: true,
        $unwatch
      };
    return result;
  }
}
const CollectFlag = {
  COLLECT_ALL: true,
  COLLECT_NONE: false
};
const VuelidateInjectChildResults = Symbol("vuelidate#injectChildResults");
const VuelidateRemoveChildResults = Symbol("vuelidate#removeChildResults");
function nestedValidations(_ref) {
  let {
    $scope,
    instance
  } = _ref;
  const childResultsRaw = {};
  const childResultsKeys = ref([]);
  const childResults = computed(() => childResultsKeys.value.reduce((results, key) => {
    results[key] = unref(childResultsRaw[key]);
    return results;
  }, {}));
  function injectChildResultsIntoParent(results, _ref2) {
    let {
      $registerAs: key,
      $scope: childScope,
      $stopPropagation
    } = _ref2;
    if ($stopPropagation || $scope === CollectFlag.COLLECT_NONE || childScope === CollectFlag.COLLECT_NONE || $scope !== CollectFlag.COLLECT_ALL && $scope !== childScope)
      return;
    childResultsRaw[key] = results;
    childResultsKeys.value.push(key);
  }
  instance.__vuelidateInjectInstances = [].concat(instance.__vuelidateInjectInstances || [], injectChildResultsIntoParent);
  function removeChildResultsFromParent(key) {
    childResultsKeys.value = childResultsKeys.value.filter((childKey) => childKey !== key);
    delete childResultsRaw[key];
  }
  instance.__vuelidateRemoveInstances = [].concat(instance.__vuelidateRemoveInstances || [], removeChildResultsFromParent);
  const sendValidationResultsToParent = inject(VuelidateInjectChildResults, []);
  provide(VuelidateInjectChildResults, instance.__vuelidateInjectInstances);
  const removeValidationResultsFromParent = inject(VuelidateRemoveChildResults, []);
  provide(VuelidateRemoveChildResults, instance.__vuelidateRemoveInstances);
  return {
    childResults,
    sendValidationResultsToParent,
    removeValidationResultsFromParent
  };
}
function ComputedProxyFactory(target) {
  return new Proxy(target, {
    get(target2, prop) {
      return typeof target2[prop] === "object" ? ComputedProxyFactory(target2[prop]) : computed(() => target2[prop]);
    }
  });
}
let uid = 0;
function useVuelidate(validations, state) {
  var _getCurrentInstance;
  let globalConfig = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (arguments.length === 1) {
    globalConfig = validations;
    validations = void 0;
    state = void 0;
  }
  let {
    $registerAs,
    $scope = CollectFlag.COLLECT_ALL,
    $stopPropagation,
    $externalResults,
    currentVueInstance
  } = globalConfig;
  const instance = currentVueInstance || ((_getCurrentInstance = getCurrentInstance()) === null || _getCurrentInstance === void 0 ? void 0 : _getCurrentInstance.proxy);
  const componentOptions = instance ? instance.$options : {};
  if (!$registerAs) {
    uid += 1;
    $registerAs = `_vuelidate_${uid}`;
  }
  const validationResults = ref({});
  const resultsCache = new ResultsStorage();
  const {
    childResults,
    sendValidationResultsToParent,
    removeValidationResultsFromParent
  } = instance ? nestedValidations({
    $scope,
    instance
  }) : {
    childResults: ref({})
  };
  if (!validations && componentOptions.validations) {
    const rules = componentOptions.validations;
    state = ref({});
    onBeforeMount(() => {
      state.value = instance;
      watch(() => isFunction(rules) ? rules.call(state.value, new ComputedProxyFactory(state.value)) : rules, (validations2) => {
        validationResults.value = setValidations({
          validations: validations2,
          state,
          childResults,
          resultsCache,
          globalConfig,
          instance,
          externalResults: $externalResults || instance.vuelidateExternalResults
        });
      }, {
        immediate: true
      });
    });
    globalConfig = componentOptions.validationsConfig || globalConfig;
  } else {
    const validationsWatchTarget = isRef(validations) || isProxy(validations) ? validations : reactive(validations || {});
    watch(validationsWatchTarget, (newValidationRules) => {
      validationResults.value = setValidations({
        validations: newValidationRules,
        state,
        childResults,
        resultsCache,
        globalConfig,
        instance: instance !== null && instance !== void 0 ? instance : {},
        externalResults: $externalResults
      });
    }, {
      immediate: true
    });
  }
  if (instance) {
    sendValidationResultsToParent.forEach((f) => f(validationResults, {
      $registerAs,
      $scope,
      $stopPropagation
    }));
    onBeforeUnmount(() => removeValidationResultsFromParent.forEach((f) => f($registerAs)));
  }
  return computed(() => {
    return Object.assign({}, unref(validationResults.value), childResults.value);
  });
}
const req = (value) => {
  value = unref(value);
  if (Array.isArray(value))
    return !!value.length;
  if (value === void 0 || value === null) {
    return false;
  }
  if (value === false) {
    return true;
  }
  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }
  if (typeof value === "object") {
    for (let _ in value)
      return true;
    return false;
  }
  return !!String(value).length;
};
const len = (value) => {
  value = unref(value);
  if (Array.isArray(value))
    return value.length;
  if (typeof value === "object") {
    return Object.keys(value).length;
  }
  return String(value).length;
};
function regex() {
  for (var _len = arguments.length, expr = new Array(_len), _key = 0; _key < _len; _key++) {
    expr[_key] = arguments[_key];
  }
  return (value) => {
    value = unref(value);
    return !req(value) || expr.every((reg) => reg.test(value));
  };
}
regex(/^[a-zA-Z]*$/);
regex(/^[a-zA-Z0-9]*$/);
regex(/^\d*(\.\d+)?$/);
const emailRegex = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
regex(emailRegex);
function minLength$1(length) {
  return (value) => !req(value) || len(value) >= unref(length);
}
function minLength(min) {
  return {
    $validator: minLength$1(min),
    $message: (_ref) => {
      let {
        $params
      } = _ref;
      return `This field should be at least ${$params.min} characters long`;
    },
    $params: {
      min,
      type: "minLength"
    }
  };
}
function required$1(value) {
  if (typeof value === "string") {
    value = value.trim();
  }
  return req(value);
}
var required = {
  $validator: required$1,
  $message: "Value is required",
  $params: {
    type: "required"
  }
};
const urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
regex(urlRegex);
regex(/(^[0-9]*$)|(^-[0-9]+$)/);
regex(/^[-]?\d*(\.\d+)?$/);
const [useProvideSharedFormStore, useSharedFormStore] = useInjectionState((sharedViewId) => {
  const progress = ref(false);
  const notFound = ref(false);
  const submitted = ref(false);
  const passwordDlg = ref(false);
  const password = ref(null);
  const secondsRemain = ref(0);
  provide(SharedViewPasswordInj, password);
  const sharedView = ref();
  const sharedFormView = ref();
  const meta = ref();
  const columns = ref();
  const { api, isLoading } = useApi();
  const { metas, setMeta } = useMetas();
  const formState = ref({});
  const { state: additionalState } = useProvideSmartsheetRowStore(meta, ref({
    row: formState,
    rowMeta: { new: true },
    oldRow: {}
  }));
  const formColumns = computed(() => {
    var _a;
    return (_a = columns.value) == null ? void 0 : _a.filter((c) => c.show).filter((col) => !isVirtualCol(col) || col.uidt === UITypes.LinkToAnotherRecord);
  });
  const loadSharedView = async () => {
    var _a;
    try {
      const viewMeta = await api.public.sharedViewMetaGet(sharedViewId, {
        headers: {
          "xc-password": password.value
        }
      });
      passwordDlg.value = false;
      sharedView.value = viewMeta;
      sharedFormView.value = viewMeta.view;
      meta.value = viewMeta.model;
      columns.value = (_a = viewMeta.model) == null ? void 0 : _a.columns;
      await setMeta(viewMeta.model);
      const relatedMetas = { ...viewMeta.relatedMetas };
      Object.keys(relatedMetas).forEach((key) => setMeta(relatedMetas[key]));
    } catch (e) {
      if (e.response && e.response.status === 404) {
        notFound.value = true;
      } else if (await extractSdkResponseErrorMsg(e) === ErrorMessages.INVALID_SHARED_VIEW_PASSWORD) {
        passwordDlg.value = true;
      }
    }
  };
  const validators = computed(() => {
    var _a;
    const obj = {
      localState: {},
      virtual: {}
    };
    if (!formColumns.value)
      return obj;
    for (const column of formColumns.value) {
      if (!isVirtualCol(column) && (column.rqd && !column.cdf || column.pk && !(column.ai || column.cdf) || column.required)) {
        obj.localState[column.title] = { required };
      } else if (column.uidt === UITypes.LinkToAnotherRecord && column.colOptions && column.colOptions.type === RelationTypes.BELONGS_TO) {
        const col = (_a = columns.value) == null ? void 0 : _a.find((c) => {
          var _a2;
          return c.id === ((_a2 = column == null ? void 0 : column.colOptions) == null ? void 0 : _a2.fk_child_column_id);
        });
        if (col && col.rqd && !col.cdf || column.required) {
          if (col) {
            obj.virtual[column.title] = { required };
          }
        }
      } else if (isVirtualCol(column) && column.required) {
        obj.virtual[column.title] = {
          minLength: minLength(1),
          required
        };
      }
    }
    return obj;
  });
  const v$ = useVuelidate(validators, computed(() => ({ localState: formState.value, virtual: additionalState.value })));
  const submitForm = async () => {
    var _a, _b, _c, _d, _e, _f;
    try {
      if (!await ((_a = v$.value) == null ? void 0 : _a.$validate())) {
        return;
      }
      progress.value = true;
      const data = { ...formState.value, ...additionalState.value };
      const attachment = {};
      for (const col of (_d = (_c = metas.value) == null ? void 0 : _c[(_b = sharedView.value) == null ? void 0 : _b.fk_model_id]) == null ? void 0 : _d.columns) {
        if (col.uidt === UITypes.Attachment) {
          if (data[col.title]) {
            attachment[`_${col.title}`] = data[col.title].map((item) => item.file);
          }
        }
      }
      await api.public.dataCreate((_e = sharedView.value) == null ? void 0 : _e.uuid, {
        data,
        ...attachment
      }, {
        headers: {
          "xc-password": password.value
        }
      });
      submitted.value = true;
      progress.value = false;
      await message.success(((_f = sharedFormView.value) == null ? void 0 : _f.sucess_msg) || "Saved successfully.");
    } catch (e) {
      console.log(e);
      await message.error(await extractSdkResponseErrorMsg(e));
    }
    progress.value = false;
  };
  watch(submitted, (nextVal) => {
    var _a, _b;
    if (nextVal && ((_a = sharedFormView.value) == null ? void 0 : _a.show_blank_form)) {
      secondsRemain.value = 5;
      const intvl = setInterval(() => {
        secondsRemain.value = secondsRemain.value - 1;
        if (secondsRemain.value < 0) {
          submitted.value = false;
          clearInterval(intvl);
        }
      }, 1e3);
    }
    if (!nextVal) {
      additionalState.value = {};
      formState.value = {};
      (_b = v$.value) == null ? void 0 : _b.$reset();
    }
  });
  return {
    sharedView,
    sharedFormView,
    loadSharedView,
    columns,
    submitForm,
    progress,
    meta,
    validators,
    v$,
    formColumns,
    formState,
    notFound,
    password,
    submitted,
    secondsRemain,
    passwordDlg,
    isLoading
  };
}, "expanded-form-store");
function useSharedFormStoreOrThrow() {
  const sharedFormStore = useSharedFormStore();
  if (sharedFormStore == null)
    throw new Error("Please call `useProvideSharedFormStore` on the appropriate parent component");
  return sharedFormStore;
}
export { useProvideSharedFormStore as a, useSharedFormStoreOrThrow as u };