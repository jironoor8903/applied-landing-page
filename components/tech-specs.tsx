import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TechSpecs() {
  return (
    <section className="w-full py-12 md:py-24 bg-[#f8f9ff]">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Technical Specifications</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Our platform is built with cutting-edge technology to deliver exceptional performance and reliability.
          </p>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="hardware" className="w-full">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="hardware">Hardware</TabsTrigger>
                <TabsTrigger value="software">Software</TabsTrigger>
                <TabsTrigger value="ai">AI Models</TabsTrigger>
              </TabsList>
            </div>
            <div className="mt-8">
              <TabsContent value="hardware" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Sensors</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>LiDAR</span>
                            <span className="font-medium">360° coverage</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Cameras</span>
                            <span className="font-medium">8K resolution</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Radar</span>
                            <span className="font-medium">Long-range detection</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Ultrasonic</span>
                            <span className="font-medium">Proximity sensing</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Computing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>Processor</span>
                            <span className="font-medium">AI-optimized SoC</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Memory</span>
                            <span className="font-medium">32GB LPDDR5</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Storage</span>
                            <span className="font-medium">1TB NVMe SSD</span>
                          </li>
                          <li className="flex justify-between">
                            <span>TOPS</span>
                            <span className="font-medium">250+ TOPS</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Connectivity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>Cellular</span>
                            <span className="font-medium">5G support</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Wi-Fi</span>
                            <span className="font-medium">Wi-Fi 6E</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Bluetooth</span>
                            <span className="font-medium">BT 5.3</span>
                          </li>
                          <li className="flex justify-between">
                            <span>V2X</span>
                            <span className="font-medium">DSRC & C-V2X</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="software" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Operating System</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>Type</span>
                            <span className="font-medium">Real-time OS</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Security</span>
                            <span className="font-medium">Hardware-level encryption</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Updates</span>
                            <span className="font-medium">OTA capability</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Redundancy</span>
                            <span className="font-medium">Triple redundant systems</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Development Tools</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>SDK</span>
                            <span className="font-medium">Comprehensive API</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Simulation</span>
                            <span className="font-medium">Digital twin environment</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Testing</span>
                            <span className="font-medium">Automated validation</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Debugging</span>
                            <span className="font-medium">Advanced diagnostics</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Middleware</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>Frameworks</span>
                            <span className="font-medium">ROS2 compatible</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Data Processing</span>
                            <span className="font-medium">Real-time pipeline</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Interfaces</span>
                            <span className="font-medium">Standardized protocols</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Extensibility</span>
                            <span className="font-medium">Plugin architecture</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="ai" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Perception</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>Object Detection</span>
                            <span className="font-medium">99.9% accuracy</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Classification</span>
                            <span className="font-medium">1000+ object classes</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Tracking</span>
                            <span className="font-medium">Multi-object tracking</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Segmentation</span>
                            <span className="font-medium">Pixel-level precision</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Planning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>Path Planning</span>
                            <span className="font-medium">Dynamic optimization</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Decision Making</span>
                            <span className="font-medium">Reinforcement learning</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Prediction</span>
                            <span className="font-medium">Behavior forecasting</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Adaptation</span>
                            <span className="font-medium">Online learning</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Control</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>Precision</span>
                            <span className="font-medium">Centimeter-level</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Response Time</span>
                            <span className="font-medium">&lt;10ms latency</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Robustness</span>
                            <span className="font-medium">Fault-tolerant design</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Efficiency</span>
                            <span className="font-medium">Optimized energy use</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

