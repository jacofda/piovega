import { Component, Vue, Prop, Watch } from 'vue-facing-decorator';
import { useValidationErrors } from '@/composables/useValidationErrors';

@Component
export default class TheErrorHandler extends Vue {
  @Prop() value!: any;

  public hasError: boolean = false;
  public error: string = '';

  @Watch('value.$error', { immediate: false, deep: false })
  public onErrorChanged() {
    this.hasError = this.value.$error;
    this.onModelChange();
  }

  @Watch('value.$model', { immediate: false, deep: false })
  public onModelChange() {
    const e = useValidationErrors(this.value.$errors);
    if (this.value.$path in e) {
      const e: Record<string, string> = useValidationErrors(this.value.$errors);
      if (this.value.$path && this.value.$path in e) {
        this.error = e[this.value.$path as string];
      }
      this.error = e[this.value.$path];
    } else {
      this.error = '';
    }
  }
}
