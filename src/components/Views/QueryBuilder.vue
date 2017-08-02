<template>

  <section class="content">
    <div class="box box-default">
      <div class="box-header with-border">
        <h3 class="box-title">Query Builder</h3>

        <div class="box-tools pull-right">
          <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
          <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-remove"></i></button>
        </div>
      </div>
      <!-- /.box-header -->
      <div class="box-body">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">

              <v-select multiple :options="countries"></v-select>
            </div>
            <!-- /.form-group -->
            <div class="form-group">
              <label>Disabled</label>
              <select class="form-control select2" disabled="disabled" style="width: 100%;">
                <option selected="selected">Alabama</option>
                <option>Alaska</option>
                <option>California</option>
                <option>Delaware</option>
                <option>Tennessee</option>
                <option>Texas</option>
                <option>Washington</option>
              </select>
            </div>
            <!-- /.form-group -->
          </div>
          <!-- /.col -->
          <div class="col-md-6">
            <div class="form-group">
              <label>Multiple</label>
              <select class="form-control select2" multiple="multiple" data-placeholder="Select a State"
                      style="width: 100%;">
                <option>Alabama</option>
                <option>Alaska</option>
                <option>California</option>
                <option>Delaware</option>
                <option>Tennessee</option>
                <option>Texas</option>
                <option>Washington</option>
              </select>
            </div>
            <!-- /.form-group -->
            <div class="form-group">
              <label>Disabled Result</label>
              <select class="form-control select2" style="width: 100%;">
                <option selected="selected">Alabama</option>
                <option>Alaska</option>
                <option disabled="disabled">California (disabled)</option>
                <option>Delaware</option>
                <option>Tennessee</option>
                <option>Texas</option>
                <option>Washington</option>
              </select>
            </div>
            <!-- /.form-group -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.box-body -->
      <!--<div class="box-footer">-->
        <!--Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and information about-->
        <!--the plugin.-->
      <!--</div>-->
    </div>
  </section>
  <!--<div class="col-md-6">-->
    <!--&lt;!&ndash; Custom Tabs (Pulled to the right) &ndash;&gt;-->
    <!--<div class="nav-tabs-custom">-->
      <!--<ul class="nav nav-tabs">-->
        <!--<li class="active"><a href="#tab_1-1" data-toggle="tab">Tab 1</a></li>-->
        <!--<li><a href="#tab_2-2" data-toggle="tab">Tab 2</a></li>-->
        <!--<li><a href="#tab_3-2" data-toggle="tab">Tab 3</a></li>-->
        <!--<li class="dropdown">-->
          <!--<a class="dropdown-toggle" data-toggle="dropdown" href="#">-->
            <!--Dropdown <span class="caret"></span>-->
          <!--</a>-->
          <!--<ul class="dropdown-menu">-->
            <!--<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>-->
            <!--<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>-->
            <!--<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>-->
            <!--<li role="presentation" class="divider"></li>-->
            <!--<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>-->
          <!--</ul>-->
        <!--</li>-->
      <!--</ul>-->
      <!--<div class="tab-content">-->
        <!--<div class="tab-pane active" id="tab_1-1">-->
          <!--<b>How to use:</b>-->

          <!--<p>Exactly like the original bootstrap tabs except you should use-->
            <!--the custom wrapper <code>.nav-tabs-custom</code> to achieve this style.</p>-->
          <!--A wonderful serenity has taken possession of my entire soul,-->
          <!--like these sweet mornings of spring which I enjoy with my whole heart.-->
          <!--I am alone, and feel the charm of existence in this spot,-->
          <!--which was created for the bliss of souls like mine. I am so happy,-->
          <!--my dear friend, so absorbed in the exquisite sense of mere tranquil existence,-->
          <!--that I neglect my talents. I should be incapable of drawing a single stroke-->
          <!--at the present moment; and yet I feel that I never was a greater artist than now.-->
        <!--</div>-->
        <!--&lt;!&ndash; /.tab-pane &ndash;&gt;-->
        <!--<div class="tab-pane" id="tab_2-2">-->
          <!--The European languages are members of the same family. Their separate existence is a myth.-->
          <!--For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ-->
          <!--in their grammar, their pronunciation and their most common words. Everyone realizes why a-->
          <!--new common language would be desirable: one could refuse to pay expensive translators. To-->
          <!--achieve this, it would be necessary to have uniform grammar, pronunciation and more common-->
          <!--words. If several languages coalesce, the grammar of the resulting language is more simple-->
          <!--and regular than that of the individual languages.-->
        <!--</div>-->
        <!--&lt;!&ndash; /.tab-pane &ndash;&gt;-->
        <!--<div class="tab-pane" id="tab_3-2">-->
          <!--Lorem Ipsum is simply dummy text of the printing and typesetting industry.-->
          <!--Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,-->
          <!--when an unknown printer took a galley of type and scrambled it to make a type specimen book.-->
          <!--It has survived not only five centuries, but also the leap into electronic typesetting,-->
          <!--remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset-->
          <!--sheets containing Lorem Ipsum passages, and more recently with desktop publishing software-->
          <!--like Aldus PageMaker including versions of Lorem Ipsum.-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->


</template>
<script>

  export default {
    data () {
      return {

        countries: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value5: []
      }
    }
  }
</script>
