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
              <!--<button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-remove"></i></button>-->
            </div>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <vue-query-builder
                    :labels="labelConf"
                    :rules="rules"
                    :maxDepth="2"
                    @queryUpdated="queryUpdated"
                  ></vue-query-builder>
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
              
            </div>
            <!-- /.tab-pane -->
            <div class="tab-pane" id="tab_2-2">
              The European languages are members of the same family. Their separate existence is a myth.
              For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ
              in their grammar, their pronunciation and their most common words. Everyone realizes why a
              new common language would be desirable: one could refuse to pay expensive translators. To
              achieve this, it would be necessary to have uniform grammar, pronunciation and more common
              words. If several languages coalesce, the grammar of the resulting language is more simple
              and regular than that of the individual languages.
            </div>
            <!-- /.tab-pane -->
            <div class="tab-pane" id="tab_3-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
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

  export default {
    name: 'app',

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

