import Tick from '@pqina/flip';
import '@pqina/flip/dist/flip.min.css';
import { createEffect, onCleanup, onMount, ParentComponent } from 'solid-js';

const Flip: ParentComponent<{ className: string }> = (props) => {
  let _tickRef, _tickInstance;

  onMount(() => {
    _tickInstance = Tick.DOM.create(_tickRef, {
      value: props.children,
    });
  });

  createEffect(() => {
    if (_tickInstance) {
      _tickInstance.value = props.children;
    }
  }, [props.children]);

  onCleanup(() => {
    if (!_tickInstance) return;
    Tick.DOM.destroy(_tickRef.current);
  });

  return (
    <div ref={_tickRef} className={'tick ' + props.className}>
      <div data-repeat="true" aria-hidden="true">
        <span data-view="flip">{props.children}</span>
      </div>
    </div>
  );
};

export default Flip;
