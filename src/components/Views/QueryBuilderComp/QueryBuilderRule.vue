<template>
  <div class="vqb-rule" :class="{ 'panel panel-default form-inline': styled }">
    <div :class="{ 'form-group': styled }">
      <label>{{ rule.label }}</label>

      <select v-if="typeof rule.operands !== 'undefined'" v-model="query.selectedOperand"
              :class="{ 'form-control': styled }">
        <option v-for="operand in rule.operands">{{ operand }}</option>
      </select>

      <select v-if="! isMultipleChoice" v-model="query.selectedOperator" :class="{ 'form-control': styled }">
        <option v-for="operator in rule.operators" :value="operator">
          {{ operator }}
        </option>
      </select>

      <input :class="{ 'form-control': styled }" v-if="rule.inputType === 'text'" type="text" v-model="query.value"
             :placeholder="labels.textInputPlaceholder"></input>
      <input :class="{ 'form-control': styled }" v-if="rule.inputType === 'number'" type="number"
             v-model="query.value"></input>

      <div class="checkbox" v-if="rule.inputType === 'checkbox'">
        <label v-for="choice in rule.choices">
          <input type="checkbox" :value="choice.value" v-model="query.value"> {{ choice.label }}
        </label>
      </div>

      <div class="radio" v-if="rule.inputType === 'radio'">
        <label v-for="choice in rule.choices">
          <input type="radio" :value="choice.value" v-model="query.value"> {{ choice.label }}
        </label>
      </div>

      <button :class="{ 'close pull-right': styled }" @click="remove" v-html="labels.removeRule"></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'query-builder-rule',
    props: ['query', 'index', 'rule', 'styled', 'labels'],
    methods: {
      remove: function () {
        this.$emit('child-deletion-requested', this.index)
      }
    },
    computed: {
      isMultipleChoice () {
        return this.rule.inputType === 'radio' || this.rule.inputType === 'checkbox'
      }
    },
    mounted () {
      if (this.rule.inputType === 'checkbox') {
        this.query.value = []
      }
    }
  }
</script>
