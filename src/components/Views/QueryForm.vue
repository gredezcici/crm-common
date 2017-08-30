<template>
  <section class="content">
    <div class="row">
      <div class="col-md-3">

        <div class="box box-solid">
          <div class="box-header with-border">
            <h3 class="box-title">My Query List</h3>
            <div class="box-tools">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>
            </div>
          </div>
          <div class="box-body no-padding">
            <ul class="nav nav-pills nav-stacked" v-model="queryList"
                v-if="typeof queryList != 'undefined'" v-for="query in queryList.rows">
              <li><a>{{query.name}}
                <div class="tools pull-right">
                  <i class="fa fa-edit"></i>
                  <i class="fa fa-trash-o"></i>
                </div>
              </a>
              </li>
            </ul>
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /. box -->
      </div>
      <!-- /.col -->
      <div class="col-md-9">
        <div class="box box-default">
          <div class="box-header with-border">
            <h3 class="box-title">Query Builder</h3>
            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
            </div>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <cc-query-builder
                    :labels="labelConf"
                    :rules="rules"
                    :maxDepth="2"
                    @queryUpdated="queryUpdated"
                  ></cc-query-builder>
                </div>
                <div class="col-md-3">
                  <button type="button" class="btn btn-block btn-default btn-sm" @click="runQuery">Run Query</button>
                </div>
                <div class="col-md-3">
                  <button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#modal-default">
                    Save Query
                  </button>
                </div>
                <div class="col-md-3">
                  <button type="button" class="btn btn-default btn-sm" @click="getMyQueryList(user.id)">
                    Update Query List
                  </button>
                </div>
                <!-- /.form-group -->
                <!-- /.col -->
              </div>
              <!-- /.row -->
            </div>
          </div>
        </div>
      </div>
      <!-- /.col -->
    </div>
    <div class="row">
      <div class="col-md-12">
        <!-- Custom Tabs (Pulled to the right) -->
        <div class="nav-tabs-custom">
          <ul class="nav nav-tabs">
            <li class="active"><a href="#tab_1-1" data-toggle="tab">Query result</a></li>
            <li><a href="#tab_2-2" data-toggle="tab">Tab 2</a></li>
            <li><a href="#tab_3-2" data-toggle="tab">Tab 3</a></li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane active" id="tab_1-1">
              <cc-data-table></cc-data-table>

            </div>
            <!-- /.tab-pane -->
            <div class="tab-pane" id="tab_2-2">

            </div>
            <!-- /.tab-pane -->
            <div class="tab-pane" id="tab_3-2">

            </div>
            <!-- /.tab-pane -->
          </div>
          <!-- /.tab-content -->
        </div>
        <!-- nav-tabs-custom -->
      </div>
      <!-- /.col -->
    </div>
    <div class="modal fade" id="modal-default">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Save as a new query</h4>
          </div>
          <div class="modal-body">
            <p><input type="text" class="form-control" id="queryName" placeholder="Query Name"></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.row -->
  </section>
</template>
<script>
  import ccDataTable from './DataTable'
  import ccQueryBuilder from './QueryBuilderComp/QueryBuilder.vue'
  import { EventHub } from '../../global/globalVar'
  export default {
    name: 'queryBuilder',
    components: {ccDataTable, ccQueryBuilder},
    methods: {
      queryUpdated (query) {
        this.query = query
      },
      runQuery () {
        let result = [
          ['Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800'],
          ['Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25', '$170,750'],
          ['Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12', '$86,000'],
          ['Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '6224', '2012/03/29', '$433,060'],
          ['Airi Satou', 'Accountant', 'Tokyo', '5407', '2008/11/28', '$162,700'],
          ['Prescott Bartlett', 'Technical Author', 'London', '3606', '2011/05/07', '$145,000'],
          ['Gavin Cortez', 'Team Leader', 'San Francisco', '2860', '2008/10/26', '$235,500'],
          ['Unity Butler', 'Marketing Designer', 'San Francisco', '5384', '2009/12/09', '$85,675']]
        let columnName = [
          {title: 'Name'},
          {title: 'Position'},
          {title: 'Office'},
          {title: 'Extn.'},
          {title: 'Start date'},
          {title: 'Salary'}
        ]
        this.$store.commit('SET_QUERY_RESULT', result)
        this.$store.commit('SET_COLUMN_NAME', columnName)
        EventHub.$emit('refreshQueryGrid')
      }
    },
    data () {
      return {
        queryList: this.$store.state.queryList,
        user: {
          name: 'admin',
          id: '0001'
        },
        query: null,
        rules: [
          {
            type: 'text',
            id: 'first-name',
            label: 'First Name'
          },
          {
            type: 'text',
            id: 'last-name',
            label: 'Last Name'
          },
          {
            type: 'radio',
            id: 'plan-type',
            label: 'Plan Type',
            choices: [
              {label: 'Standard', value: 'standard'},
              {label: 'Premium', value: 'premium'}
            ]
          }
        ],
        labelConf: {
          addGroup: 'Add Group',
          addRule: 'Add Rule',
          matchType: 'Match Type',
          matchTypeAll: 'All',
          matchTypeAny: 'Any',
          removeGroup: '&times;',
          removeRule: '&times;',
          textInputPlaceholder: 'value'
        }
      }
    }
  }
</script>

