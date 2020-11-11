
type InterfaceOf<T> = {
	[P in keyof T]: T[P];
}

type CanvasRenderingContext2DLike = InterfaceOf<CanvasRenderingContext2D>;

function unimplemented() {
	return {} as any;
}

const c: CanvasRenderingContext2D;

export class WebGLContext2D implements CanvasRenderingContext2DLike {

	public get canvas(): HTMLCanvasElement {
		return unimplemented();
	}	

	public direction: CanvasDirection = 'inherit';

	public fillStyle: string | CanvasGradient | CanvasPattern = '#000';

	public filter: string = 'none';

	public font: string = '10px sans-serif';

	public globalAlpha: number = 1.0;

	public globalCompositeOperation: string = '';

	public imageSmoothingEnabled: boolean = true;

	public imageSmoothingQuality: ImageSmoothingQuality = 'medium';

	public lineCap: CanvasLineCap = 'butt';

	public lineDashOffset: number = 0.0;

	public lineJoin: CanvasLineJoin = 'miter';

	public lineWidth: number = 1.0;

	public miterLimit: number = 10.0;

	public shadowBlur: number = 0.0;

	public shadowColor: string = '';

	public shadowOffsetX: number = 0.0;

	public shadowOffsetY: number = 0.0;

	public strokeStyle: string | CanvasGradient | CanvasPattern = '';

	public textAlign: CanvasTextAlign = 'start';

	public textBaseLine: CanvasTextBaseline = 'alphabetic';

}
