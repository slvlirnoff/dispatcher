import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('route-map/stop-marker', 'Integration | Component | edit map/stop marker', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{route-map/stop-marker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#route-map/stop-marker}}
      template block text
    {{/route-map/stop-marker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
