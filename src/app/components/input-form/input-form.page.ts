import {NgForm} from "@angular/forms";
/**
 * Created by Papa on 1/30/2017.
 */

export abstract class InputFormPage<T, R> {

  private submitted = false;

  protected setSubmitted(): void {
    this.submitted = true;
  }

  protected isSubmitted(): boolean {
    return this.submitted;
  }

  protected clearSubmitted(): void  {
    this.submitted = false;
  }

  protected abstract doSubmit(form: NgForm):Promise<R>;

  async submit(
    form: NgForm
  ) {
    if (this.isSubmitted()) {
      return;
    }
    if (form.invalid) {
      return;
    }
    this.setSubmitted();

    await this.doSubmit(form);

    this.clearSubmitted();
  }
}
