<template>
  <section class="content">
    <div class="row">
      <div class="col-md-3">

        <div class="box box-solid">
          <div class="box-header with-border">
            <h3 class="box-title">Queries</h3>

            <div class="box-tools">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>
            </div>
          </div>
          <div class="box-body no-padding">
            <ul class="nav nav-pills nav-stacked">
              <li><a href="mailbox.html"><i class="fa fa-inbox"></i> Inbox
                <span class="label label-primary pull-right">12</span></a></li>
              <li><a href="#"><i class="fa fa-envelope-o"></i> Sent</a></li>
              <li><a href="#"><i class="fa fa-file-text-o"></i> Drafts</a></li>
              <li><a href="#"><i class="fa fa-filter"></i> Junk <span
                class="label label-warning pull-right">65</span></a>
              </li>
              <li><a href="#"><i class="fa fa-trash-o"></i> Trash</a></li>
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

    <!-- /.row -->
  </section>
</template>
<script>
  import ccDataTable from './DataTable'
  import ccQueryBuilder from './QueryBuilderComp/QueryBuilder.vue'
  export default {
    name: 'queryBuilder',
    components: {ccDataTable, ccQueryBuilder},
    methods: {
      queryUpdated (query) {
        this.query = query
      }
    },

    data () {
      return {
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
          matchType: 'Match Type1',
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

